const { text } = require("express")
const mongoose = require("mongoose")

const ServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    value:{
        type:Number,
        require:true
    },
    speed:{
        type:Number,
        require:true
    },
    degree:{
        type:Number,
        require:true
    },
    commandId:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("Servo",ServoSchema)