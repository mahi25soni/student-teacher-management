const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("N:/Coding/NodeJs/Student Management System/middlewares/tokenAuth")

 const {
    studentsRegisterPage,
    studentsRegister,
    studentsLoginPage,
    studentsLogin,
    viewAll
}  = require("../controller/students.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(studentsRegisterPage)
    .post(studentsRegister)

router.route("/login")
    .get(studentsLoginPage)
    .post(studentsLogin) 

module.exports =router