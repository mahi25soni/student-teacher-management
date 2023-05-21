const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const admin = require("./src/admin/route/admin.route")
const grade = require("./src/grade/route/grade.route")
const teachers = require("./src/teachers/route/teachers.route")
const student = require("./src/students/route/students.route")

const Connect = require("./extras/mongo.connect")

const app = express()

app.use(bodyParser.urlencoded  ( {extended:false} ) )
app.use(bodyParser.json());

const uri = 'mongodb://0.0.0.0:27017/StudentManagement';  // mongodb://localhost:27017 is not working more some reasons 


app.use("/admin", admin)
app.use("/student", student)
app.use("/class", grade)
app.use("/teachers", teachers)


const trying = async () => {
    try {
        await Connect(uri)
        app.listen(3000, function() {
            console.log("we are at port 3000")
        })
    }
    catch(e) {
        console.log(e)
    }
}
trying()


