const {admin, teacher, grade} = require("N:/Coding/NodeJs/Student Management System/models/models.js")
const { hash , compare} = require("bcrypt")
const jwt  = require("jsonwebtoken")


const  teachersRegisterPage = (req, res) => {
    res.send("Teachers register ka page")
}

const teachersRegister = async (req, res) => {
    // req.body.password = await hash(req.body.password, 10)
    console.log(req.body)
    const newteacher = new teacher(req.body)
    newteacher.save()
    res.send(newteacher)
}

const teachersLoginPage = (req, res) => {
    res.send("Teachers login ka page")
}

const teachersLogin = async (req, res) => {
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
    const all_data = await teacher.find().exec()
    res.send(all_data)
}

module.exports = { 
    teachersRegisterPage,
    teachersRegister,
    teachersLoginPage,
    teachersLogin,
    viewAll
}