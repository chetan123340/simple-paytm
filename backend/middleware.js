const jwt = require("jsonwebtoken")
const { User } = require("./db")
require('dotenv').config()


const authMiddleware = async (req, res, next)=>{
    const header = req.headers.authorization
    

    if (!header) {
        return res.status(400).json({
            error: "Authorization header missing",
        });
    }

    const [type, token] = header.split(" ")
    if (type !== "Bearer") {
        return res.status(400).json({
            error: "Invalid Authorization header type"
        })
    }
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;
        next()
    } catch (error) {
        return res.status(403).json({
            error: "Authorization required"
        })
    }
        
}

module.exports = authMiddleware