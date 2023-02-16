let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

const menuToggle=()=> {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

// time display
function display(){
    var refresh = 1000;
    const myTime = setTimeout('display_time()',refresh);
  }
  
  function display_time() {
    const d = new Date();
    let text = d.toLocaleString();
    document.getElementById("time").innerHTML = text;
    display();
}

// เพิ่ม ID
function addId(){
  document.getElementById("commandId").value = crypto.randomUUID();
}


// แผงคำสั่งเลือกhome display
$(document).ready(function(){
  $("#button-home").click(function(){
    $("#select-display").toggle();
  });
});

//ใช้ class ในการรับค่าสถานะการแสดงBlock
function CheckBoxDisplay(name ,checkBoxName, displayName){
  this.name=name;
  this.checkBoxName=checkBoxName;
  this.displayName=displayName;
}
CheckBoxDisplay.prototype.BlockDisplay=function(){
// actuator display home
  let name = this.name
  let showing
  let checkBoxName = this.checkBoxName;
  let displayName = this.displayName;
  //เลือกเอาCheckboxทั้งหมด
  const checkBox = document.querySelectorAll(`[id^=${checkBoxName}]`)
  //arrayไว้เก็บตัวCheckbox
  const elements = [];
  const storage = localStorage.getItem('storage'+name)
  showing = JSON.parse(storage || "null");
  //ถ้าไม่มีข้อมูลcheckboxเก็บไว้ให้ไม่โชว์อะไรเลย
  if (!showing) {
    showing = {}
    for (i=1;i<=checkBox.length;i++) {
      showing["typeBlockDisplay"+i] = false;
    }
    let idDiv = 1;
    for (const [key, value] of Object.entries(showing)) {
      showBox(idDiv, value, checkBoxName);
      idDiv ++
    }
  }
  //ถ้ามีข้อมูลเก็บcheckboxไว้ให้โชว์ข้อมูลActuatorที่จำไว้
  else {
    let idDiv = 1;
    for (const [key, value] of Object.entries(showing)) {
      showBox(idDiv, value, checkBoxName);
      idDiv ++
    }
  }

  //ใส่function cbclickไว้สำหรับการcheckbox 
  for(i=0;i<checkBox.length;i++){
    let j = i+1;
    elements[i] = document.getElementById(checkBoxName+j).addEventListener("click", cbclicked);
  }

   function cbclicked() {
    let num = this.id.replace(/\D/g, '');
    thisBlockDisplay = "typeBlockDisplay" + num;
    //ทำให้CheckBoxได้ เป็นการส่งค่าตรงข้าม ถ้า showing true อยู่จะเป็นเป็น false and vice versa จาก (x = !x) คือการสลับlogic
    showing[thisBlockDisplay] = !showing[thisBlockDisplay];
    showBox(num, showing[thisBlockDisplay], checkBoxName);
    //เก็บค่าเข้าlocalStorage.show
    localStorage.setItem('storage'+name, JSON.stringify(showing))
  }

   function showBox(num, flag, checkBoxName1){
    document.getElementById(checkBoxName1 + num).checked = flag;
    document.getElementById(displayName + num).style.display =
    // (condition) ? (if true, do this) : (otherwise, do this)
      flag ? "block" : "none";
  } 
};

let actuatorDisplayBlock= new CheckBoxDisplay("actuatorHome","home-actuator-checkbox","home-actuator-display")
let sensorDisplayBlock= new CheckBoxDisplay("sensorHome","home-sensor-checkbox","home-sensor-display")
function displayCheckBox(){
  actuatorDisplayBlock.BlockDisplay()
  sensorDisplayBlock.BlockDisplay()
}

// แผงคำสั่งเลือกcommand-temp display
$(document).ready(function(){
  $("#button-command-temp").click(function(){
    $("#select-display-command-temp").toggle();
  });
});

// check-box display temp
tempServoBoxChanged=()=>{
  if($('#temp-servo').is(":checked"))   
  $("#temp-servo-display").show();
  else
  $("#temp-servo-display").hide();
}

