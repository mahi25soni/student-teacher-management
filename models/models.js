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
},{
    timestamps: true,
  })
const admin = new mongoose.model("admin", adminSchema)

const gradeSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    class_teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "teacher",
    },
    students : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "teacher",
    }],
    students : String
},{
    timestamps: true,
  })

const grade = new mongoose.model("grade", gradeSchema)

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
},{
    timestamps: true,
  })

const teacher = new mongoose.model("teacher", teacherSchema)

const studentSchema = new mongoose.Schema({
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
    grade : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "grade",
    },
    result : {
        type : String
    }
},{
    timestamps: true,
  })

const student = new mongoose.model("student", studentSchema)

module.exports = {
    admin,
    grade,
    teacher,
    student
}

