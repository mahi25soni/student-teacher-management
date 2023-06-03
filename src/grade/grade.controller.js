const {admin, grade, teacher, student} = require("../../models/models")
const { hash , compare} = require("bcrypt")
const jwt  = require("jsonwebtoken")


const  gradeRegisterPage = (req, res, next) => {
    res.send("Teachers register ka page")
}

const gradeRegister = async (req, res, next) => {
    try{
        const newgrade = new grade(req.body)
        await newgrade.save()
    }
    catch(err){
            next(err)
    }
}

const viewAll = async (req, res, next) => {
    try{
        const all_data = await grade.find().exec()
        res.send(all_data)
    }
    catch(e){
        next(e)
    }

}

module.exports = {
    gradeRegisterPage,
    gradeRegister,
    viewAll
}