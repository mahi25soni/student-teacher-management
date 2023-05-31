const {examMaster ,marks} = require("N:/Coding/NodeJs/Student Management System/models/models.js")


const addMarksPage = (req, res) => {
    res.send("PAGE for laoding marks")
}

const addMarks = async (req, res) => {
    res.send("post ki")
}

const getAll = async (req, res) => {
    res.send("Get all ki api")
}

const getById = async(req, res) => {
    res.send("Get by id ka hai yeh")
}

module.exports = {
    addMarksPage,
    addMarks,
    getAll,
    getById
}