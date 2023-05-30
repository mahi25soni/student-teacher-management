const express = require("express")
const router = express.Router()

const {addExamMaster, addExamMasterPage, getAll} = require("./subject-master.controller")

router.route("/").get(getAll)

router.route("/add")
    .get(addExamMasterPage)
    .post(addExamMaster)


module.exports = router
