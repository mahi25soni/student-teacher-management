const express = require("express")
const router = express.Router()
const { handleVerification } = require("../../middlewares/verificationError")

const {
    gradeRegisterPage,
    gradeRegister,
    viewAll
}  = require("../grade/grade.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(gradeRegisterPage)
    .post(gradeRegister, handleVerification)

module.exports =router