const express = require("express")
const router = express.Router()

const {addSubjectMaster, addSubjectMasterPage, getAll} = require("./subject-master.controller")

router.route("/").get(getAll)

router.route("/add")
    .get(addSubjectMasterPage)
    .post(addSubjectMaster)


module.exports = router
