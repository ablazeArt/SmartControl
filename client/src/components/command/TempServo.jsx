import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TempServo = (props) => {
    const [commands, setCommands] = useState([]);
    const fetchData = () => {
      axios
        .get(`${process.env.REACT_APP_API}/commands`)
        .then((response) => {
          setCommands(response.data);
        })
        .catch((err) =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
          })
        });
    };
    useEffect(() => {
      fetchData();
    }, []);

    const confirmDelete = (id)=>{
      Swal.fire({
        title:"คุณต้องการยกเลิกคำสั่งใช่หรือไม่",
        icon:"warning",
        showCancelButton:true
      }).then((result)=>{
        //userยืนยันการลบคำสั่ง
        if(result.isConfirmed){
          deleteCommmand(id)
        }
      })
    }
    const deleteCommmand = (id)=>{
      //ส่งAPIไปยังserverเพื่อลบข้อมูล
      axios.delete(`${process.env.REACT_APP_API}/command/${id}`)
      .then(response=>{
        Swal.fire({
          title:"ยกเลิกคำสั่งเรียบร้อย",
          icon:"success"
        })
        fetchData()
      }).catch(err=>alert(err))
    }
    return (
      <div>
        {commands.map((command, index) => (
                <div className="col-12 column-line list-display">
                  <p className="list-display-text">{command.actuatorName}</p>
                  <p className="list-display-text">อุณหภูมิที่เริ่มทำงาน:{command.value}</p>
                  <p className="list-display-text">ความเร็วการหมุน:{command.speed}</p>
                  <p className="list-display-text">องศาการหมุน:{command.degree}</p>
                  <button><Link to={`command/edit/${command.commandId}`} className="list-display-text edit-btn">แก้ไข</Link></button>
                  <button onClick={()=>confirmDelete(command.commandId)}><a className="list-display-text delete-btn">ลบ</a></button>
                  <p className="list-display-text">สถานะการทำงาน:</p>
                  <img
                    className="img-status"
                    src={require("../images/red-icon.png")}
                    alt=""
                  />
                </div>
        ))}
      </div>
    );
  };
  
  export default TempServo;
  