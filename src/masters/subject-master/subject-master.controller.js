

const addExamMasterPage = (req, res) => {
    res.send("PAGE for laoding exam master")
}

const addExamMaster = (req, res) => {
    res.send("exam master add kar diya hai")
}

const getAll = (req, res) => {
    res.send("get all masters")
}

module.exports = {
    addExamMasterPage,
    addExamMaster,
    getAll
}