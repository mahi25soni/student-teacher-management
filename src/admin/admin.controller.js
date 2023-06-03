const {admin} = require("../../models/models")
const { hash , compare} = require("bcrypt")
const jwt  = require("jsonwebtoken")


const  registerPage = (req, res) => {
    res.send("Register ka get")
}

const register = async (req, res, next) => {
    try{    
        req.body.password = await hash(req.body.password, 10)
    const newadmin = new admin(req.body)
    await newadmin.save()
    res.send(newadmin)
    }
    catch(e){
        next(e)
    }
}

const loginPage = (req, res) => {
    res.send("Register ka get")
}

const login = async (req, res) => {
    const adminuser = await admin.findOne({"email" : req.body.email}).exec() // FindOne return a object, find returns a list
        if(!adminuser){
            return res.status(404).send("No Such admin exists")
        }
        else {
            const comparePass = await compare(req.body.password, adminuser.password)
            if(!comparePass){
                return res.status(401).send("Password does not matches")
            }
            jwt.sign({role:"admin", userId : adminuser.id, email : adminuser.email},
            "adminsecretpower", (err, token)=> {
                if(err) {
                    return res.send(err)
                }
                else{
                    req.headers.authorization = token
                    return res.send(token)


                }

            })
        
    }
}


const viewAll = async (req, res, next) => {
    try{

        const all_data = await admin.find().exec()
        res.send(all_data)
    }
    catch(e) {
        next(e)
    }
}
module.exports = {
    registerPage,
    register,
    loginPage,
    login,
    viewAll
}