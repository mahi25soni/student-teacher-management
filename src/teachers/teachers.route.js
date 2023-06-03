const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("N:/Coding/NodeJs/Student Management System/middlewares/tokenAuth")

 const {
    teachersRegisterPage,
    teachersRegister,
    teachersLoginPage,
    teachersLogin,
    viewAll
}  = require("../controller/teachers.controller")

router.route("/").get(viewAll)

router.route("/register")
    .get(teachersRegisterPage)
    .post(teachersRegister)

router.route("/login")
    .get(teachersLoginPage)
    .post(teachersLogin) 

module.exports =router