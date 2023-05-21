const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("N:/Coding/NodeJs/Student Management System/middlewares/tokenAuth")

 const {
    gradeRegisterPage,
    gradeRegister,
    viewAll
}  = require("../controller/grade.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(gradeRegisterPage)
    .post(gradeRegister)

module.exports =router