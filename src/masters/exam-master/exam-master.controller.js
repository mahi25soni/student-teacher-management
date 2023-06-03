const {examMaster} = require("N:/Coding/NodeJs/Student Management System/models/models.js")


const addExamMasterPage = (req, res) => {
    res.send("PAGE for laoding exam master")
}

const addExamMaster = async (req, res, next) => {
    // examMaster.collection.dropIndex({ name: 1 }, (err) => {
    //     if (err) {
    //       console.error('Error dropping unique index:', err);
    //     } else {
    //       res.send('Unique index dropped successfully.');
    //     }
    //   });
    try {
        const newexam = new examMaster(req.body)
        await newexam.save()
        res.send(newexam)
    }
    catch(e){
            next(e)
    }
}

const getAll = async (req, res) => {
    try { 
        const allExams = await examMaster.find().exec()
        res.status(201).send(allExams)
    }
    catch(e) {
        res.send(e)
    }
}

module.exports = {
    addExamMasterPage,
    addExamMaster,
    getAll
}