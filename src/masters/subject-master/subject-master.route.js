const express = require("express")
const router = express.Router()

const {addSubjectMaster, addSubjectMasterPage, getAll} = require("./subject-master.controller")
const { handleVerification } = require("../../../middlewares/verificationError")

router.route("/").get(getAll, handleVerification)

router.route("/add")
    .get(addSubjectMasterPage)
    .post(addSubjectMaster, handleVerification)


module.exports = router
