const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("You are getting the students")
})

router.post("/", (req, res) => {
    res.send("You are posting on students")
})

module.exports =router