const mongoose = require('mongoose')


const signupSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    }
    
},{timestamps:true})


module.exports = mongoose.model("Resiter",signupSchema)