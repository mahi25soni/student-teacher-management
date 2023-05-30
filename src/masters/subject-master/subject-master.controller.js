const {subjectMaster} = require("N:/Coding/NodeJs/Student Management System/models/models.js")


const addSubjectMasterPage = (req, res) => {
    res.send("PAGE for laoding Subject master")
}

const addSubjectMaster = async (req, res) => {
    try {
        const newSubject = new subjectMaster(req.body)
        await newSubject.save()
        res.send(newSubject)
    }
    catch(e){
        if(e.code === 11000){
            res.send("Duplicated values not allowed")
        }
        else {
            res.send(e)
        }
    }
}

const getAll = async (req, res) => {
    try { 
        const allSubjects = await subjectMaster.find().exec()
        res.status(201).send(allSubjects)
    }
    catch(e) {
        res.send(e)
    }
}

module.exports = {
    addSubjectMasterPage,
    addSubjectMaster,
    getAll
}