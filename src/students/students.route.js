const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("../../middlewares/tokenAuth")
const { handleVerification } = require("../../middlewares/verificationError")

 const {
    studentsRegisterPage,
    studentsRegister,
    studentsLoginPage,
    studentsLogin,
    viewAll
}  = require("../students/students.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(studentsRegisterPage)
    .post(studentsRegister, handleVerification )

router.route("/login")
    .get(studentsLoginPage)
    .post(studentsLogin) 

module.exports =router 