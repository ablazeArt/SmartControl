const express = require("express");
const cors =  require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const {create, getAllCommands, singleCommand, remove, modify} = require("./controller/webController")
require("dotenv").config()

const app = express();
//สำคัญมาก ใช้ในการ post ข้อมูล
app.use(express.json()); 
app.use(cors())

//connect cloud database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:false
}).then(()=>console.log("connected database"))
.catch((err)=>console.log(err))

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/create',create)
app.get('/commands',getAllCommands)
app.get('/command/:commandId',singleCommand)

app.delete('/command/:commandId',remove)
app.put('/command/:commandId',modify)

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/login.html");
})


app.post("/", function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  async function run() {

    if (firstName == "123" && lastName == "123") {
      res.sendFile(__dirname + "/home.html");
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

  }

  run();

});

app.post("/login", function(req, res){
  res.redirect("/");
})

const port = process.env.PORT || 7000;
app.listen(port, ()=> {
  console.log(`Hello, Start server in port ${port}`);
});

//api key
//53cc39e3f9d8d825b57f64b7f31f985e-us5

//list id
//95c96e81f9
