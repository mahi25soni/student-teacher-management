const express = require("express")
const router = express.Router()

const {addMarksPage, addMarks, getAll, getById} = require("./marks.controller")


router.route("/").get(getAll)
router.route("/:id").get(getById)

router.route("/add")
    .get(addMarksPage)
    .post(addMarks)

module.exports = router