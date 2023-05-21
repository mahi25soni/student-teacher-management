const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Enter your username"]
        
    },
    email : {
        type : String,
        unique : true,
        required : [true, "Enter your email"],

    },
    schoolname : {
        type : String,
        // unique : true, Isko baad mei sahi kr denge
        required : [true, "Enter your schoolname"]
        
    },
    password : {
        type : String,
        required : [true, "Enter your password"],
        minlength : [8, "Password is too short"]
    },
})
const admin = new mongoose.model("admin", adminSchema)

const gradeSchema = new mongoose.Schema({
    name : {
        type : String,
        unique: true
    },
    class_teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "teacher",
        required : [true, "Enter your username"]

    },
    students : String
})

const grade = new mongoose.model("class", gradeSchema)

const teacherSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Enter your username"]
        
    },
    email : {
        type : String,
        // unique : true,
        required : [true, "Enter your email"],

    },
    // password : {
    //     type : String,
    //     required : [true, "Enter your password"],
    //     // minlength : [8, "Password is too short"]
    // },
})

const teacher = new mongoose.model("teacher", teacherSchema)

module.exports = {
    admin,
    grade,
    teacher
}

