const express = require("express")
const router = express.Router()
const { verifyAdmin } = require("N:/Coding/NodeJs/Student Management System/middlewares/tokenAuth")

const { registerPage, register, loginPage, login, viewAll}= require("./admin.controller")
const { handleVerification } = require("../../middlewares/verificationError")

router.route("/").get(viewAll)

router.route("/register").get(registerPage).post(register, handleVerification)

router.route("/login")
    .get(verifyAdmin, loginPage)
    .post(login)

module.exports =router