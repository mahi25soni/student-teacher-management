const jwt = require("jsonwebtoken")

function verifyAdmin(req, res, next) {
    const token = req.headers.authorization
    console.log("verify wala ", req)

    if(!token){
        return res.status(401).json({message : "No token provided"})
    }
    jwt.verify(token, "adminsecretpower", (err, decoded) => {
        if(err){
            return res.status(401).send("Invalid Token")
        }
        else{
            req.user = decoded
            if(req.user.role === "admin"){
                next()
            }
            else {
                return res.status(401).send("You are not an admin")
            }
            
        }
    })
}

module.exports = {verifyAdmin} // Isko harr baar curly brackets mei bhejna pdta hia, without this it show error like "Router.get require function but got a object"