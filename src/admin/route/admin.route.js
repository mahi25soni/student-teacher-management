const express = require("express")
const router = express.Router()

router.route("/register")
    .get((req, res)=>{
        res.send("Register ka get")
    })
    .post((req, res)=>{
        res.send("register ka post")
    })

router.route("/login", (req, res) => {
    res.send("You are posting on admin")
})

module.exports =router