const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("N:/Coding/NodeJs/Student Management System/middlewares/tokenAuth")

 const {
    gradeRegisterPage,
    gradeRegister,
    gradeLoginPage,
    gradeLogin,
    viewAll
}  = require("../controller/grade.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(gradeRegisterPage)
    .post(gradeRegister)

router.route("/login")
    .get(gradeLoginPage)
    .post(gradeLogin)

module.exports =router