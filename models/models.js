const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : [true, "Enter your username"]
        
    },
    email : {
        type : String,
        unique : true,
        required : [true, "Enter your email"],

    },
    schoolname : {
        type : String,
        unique : true,
        required : [true, "Enter your schoolname"]
        
    },
    password : {
        type : String,
        required : [true, "Enter your password"],
        minlength : [8, "Password is too short"]
    },
})
const admin = new mongoose.model("admin", adminSchema)

module.exports = {
    admin
}

