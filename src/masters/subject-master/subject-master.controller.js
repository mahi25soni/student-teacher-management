const {subjectMaster} = require("N:/Coding/NodeJs/Student Management System/models/models.js")


const addSubjectMasterPage = (req, res) => {
    res.send("PAGE for laoding Subject master")
}

const addSubjectMaster = async (req, res, next) => {
    try {
        const newSubject = new subjectMaster(req.body)
        await newSubject.save()
        res.send(newSubject)
    }
    catch(e){
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try { 
        const allSubjects = await subjectMaster.find().exec()
        res.status(201).send(allSubjects)
    }
    catch(e) {
        next(e)
    }
}

module.exports = {
    addSubjectMasterPage,
    addSubjectMaster,
    getAll
}