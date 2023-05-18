const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const student = require("./src/user/route/user.route")
const admin = require("./src/admin/route/admin.route")

const Connect = require("./extras/mongo.connect")

const app = express()

app.use(bodyParser.urlencoded  ( {extended:false} ) )
app.use(bodyParser.json());

const uri = 'mongodb://0.0.0.0:27017/StudentManagement';  // mongodb://localhost:27017 is not working more some reasons 


app.use("/admin", admin)
app.use("/student", student)

const trying = async () => {
    try {
        await Connect(uri)
        app.listen(3000, function() {
            console.log("we are at port 3000")
        })
    }
    catch(e) {
        console.log(e)
    }
}
trying()


