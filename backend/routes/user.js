const express = require("express");
const userZod = require("../types");
const { User } = require("../db");
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

userRouter.post("/signup", async (req,res)=>{
    try {
        const user = userZod.safeParse(req.body)
        if (user.success) {
            if (await User.exists({username: user.data.username})) {
                return res.status(409).json({
                    message: "User Already exists"
                })
            }
            const newUser = await User({
                username: user.data.username,
                firstname: user.data.firstname,
                lastname: user.data.lastname
            })
            var hashedPassword = await newUser.createHash(user.data.password)
            newUser.password = hashedPassword

            await newUser.save()
            return res.status(201).json({
                message: "User created successfully.",
                token: "jwt"
              });
        }
    } catch (error) {
        console.log("routes :: userRouter :: error ::", error);
        
    }
})

userRouter.post("/signin", (req, res)=>{
    
})

module.exports = {
    userRouter
}