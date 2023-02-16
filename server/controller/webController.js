//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../models/commandData")


exports.create=(req,res)=>{
    const {actuatorName,value,speed,degree,commandId} = req.body

    //validate(ตรวจสอบข้อมูล)
    switch(true){
        case !value:
            return res.status(400).json({error:"กรุณาใส่ค่าที่ต้องการให้ทำงาน"})
            break;
        case !speed:
            return res.status(400).json({error:"กรุณาใส่ค่าความเร็วการหมุน"})
            break;
        case !degree:
            return res.status(400).json({error:"กรุณาใส่ค่าองศาการหมุน"})
            break;
        case !commandId:
            return res.status(400).json({error:"กรุณาใส่ค่าองศาการไอดี"})
            break;
    }
    //บันทึกข้อมูล
    commandData.create({actuatorName,value,speed,degree,commandId},(err,command)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        res.json(command)
    })
}

//ดึงคำสั่งทั้งหมด
exports.getAllCommands=(req,res)=>{
    commandData.find({}).exec((err,commands)=>{
        res.json(commands)
    })
}

//ดึงเพียงคำสั่งเดียว
exports.singleCommand=(req,res)=>{
    const {commandId} = req.params
    commandData.findOne({commandId}).exec((err,command)=>{
        res.json(command)
    })
}
//ลบคำสั่ง
exports.remove=(req,res)=>{
    const {commandId} = req.params
    commandData.findOneAndRemove({commandId}).exec((err,command)=>{
        if(err) console.log(err)
        res.json({
            message:'ลบคำสั่งเรียบร้อย'
        })
    })
}

//แก้ไขคำสั่ง
exports.modify=(req,res)=>{
    const {commandId} = req.params
    // ส่งข้อมูล => title , content, author
    const {actuatorName,value,speed,degree}=req.body

        //validate(ตรวจสอบข้อมูล)
        switch(true){
            case !value:
                return res.status(400).json({error:"กรุณาใส่ค่าที่ต้องการให้ทำงาน"})
                break;
            case !speed:
                return res.status(400).json({error:"กรุณาใส่ค่าความเร็วการหมุน"})
                break;
            case !degree:
                return res.status(400).json({error:"กรุณาใส่ค่าองศาการหมุน"})
                break;
            case !commandId:
                return res.status(400).json({error:"กรุณาใส่ค่าองศาการไอดี"})
                break;
        }
    commandData.findOneAndUpdate({commandId},{actuatorName,value,speed,degree},{new:true}).exec((err,command)=>{
        if(err) console.log(err)
        res.json(command)
    })
}