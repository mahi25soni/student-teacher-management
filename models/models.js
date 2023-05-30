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
        ref : "student",
    }]
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
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subjectMaster"
    }
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
        unique : [true, 'Username already taken'],
        required : [true, "Enter your username"]
        
    },
    email : {
        type : String,
        unique : true,
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
    }
},{
    timestamps: true,
  })

studentSchema.post("save", async function(){ // Can't use arrow function here
    const find_grade = await grade.findOne({_id : this.grade}).exec()
    find_grade.students.push(this._id)
    await find_grade.save()
})
const student = new mongoose.model("student", studentSchema)


const examMasterSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true
    },
    session : Number

}, {
    timestamps : true
})
const examMaster = new mongoose.model("examMaster", examMasterSchema)


const subjectMasterSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true
    },
},{
    timestamps : true
})
const subjectMaster = new mongoose.model("subjectMaster", subjectMasterSchema)

const markSchema = new mongoose.Schema({
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "student"
    },
    examId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "exam"
    },
    subjectId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subjectMaster"
    },
    total_marks : Number,
    marks_obtained : Number
},
{
    timestamps : true
})

const marks = new mongoose.model("marks", markSchema)





module.exports = {
    admin,
    grade,
    teacher,
    student
}

