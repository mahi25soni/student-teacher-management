const {admin, grade, teacher, student} = require("N:/Coding/NodeJs/Student Management System/models/models.js")
const { hash , compare} = require("bcrypt")
const jwt  = require("jsonwebtoken")


const  gradeRegisterPage = (req, res) => {
    res.send("Teachers register ka page")
}

const gradeRegister = async (req, res) => {
    try{
        const newgrade = new grade(req.body)
        await newgrade.save()
    }
    catch(err){
        if (err.code === 11000) {
            res.status(400).send("Grade name already exists");
        }
        else {
            res.send(err._message)
        }
    }
}

const viewAll = async (req, res) => {
    const all_data = await grade.find()``.exec()
    res.send(all_data)
}

module.exports = {
    gradeRegisterPage,
    gradeRegister,
    viewAll
}