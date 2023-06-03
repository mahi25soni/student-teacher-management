const {admin, teacher, grade, student} = require("N:/Coding/NodeJs/Student Management System/models/models.js")
const { hash , compare} = require("bcrypt")
const jwt  = require("jsonwebtoken")


const  studentsRegisterPage = (req, res) => {
    res.send("students register ka page")
}

const studentsRegister = async (req, res, next) => {
    // req.body.password = await hash(req.body.password, 10)
    console.log(req.body)
    try {
        const newstudent = new student(req.body)
        await newstudent.save()
        res.send(newstudent)
    }

    catch(err) {
        next(err)
    }
}

const studentsLoginPage = (req, res) => {
    res.send("students login ka page")
}

const studentsLogin = async (req, res) => {
    // const adminuser = await admin.findOne({"email" : req.body.email}).exec() // FindOne return a object, find returns a list
    //     if(!adminuser){
    //         return res.status(404).send("No Such admin exists")
    //     }
    //     else {
    //         const comparePass = await compare(req.body.password, adminuser.password)
    //         if(!comparePass){
    //             return res.status(401).send("Password does not matches")
    //         }
    //         // jwt.sign({role:"admin", userId : adminuser.id, email : adminuser.email},
    //         // "adminsecretpower", (err, token)=> {
    //         //     if(err) {
    //         //         return res.send(err)
    //         //     }
    //         //     else{
    //         //         req.headers.authorization = token
    //         //         return res.send(token)


    //         //     }
    //         // })
    //         res.send("Passwords mil gaye")
        
    // }
}

const viewAll = async (req, res) => {
    const all_data = await student.find().exec()
    res.send(all_data)
}

module.exports = { 
    studentsRegisterPage,
    studentsRegister,
    studentsLoginPage,
    studentsLogin,
    viewAll
}