const express = require("express")
const router = express.Router()
const { handleVerification } = require("../../../middlewares/verificationError")
const {addExamMaster, addExamMasterPage, getAll} = require("./exam-master.controller")

router.route("/").get(getAll)

router.route("/add")
    .get(addExamMasterPage)
    .post(addExamMaster, handleVerification)

module.exports = router
