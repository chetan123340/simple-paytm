const express = require("express");
const {userSigninZod, userSignupZod, updateUserZod} = require("../types");
const { User, Account } = require("../db");
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware");

const userRouter = express.Router()

userRouter.get("/me", authMiddleware, async (req, res)=>{
    const user = await User.findOne({_id: req.userId})
    if (user) {
        return res.status(200).json(user)
    } else {
        return res.status(404).json({message: "User not found"})
    }
})

userRouter.post("/signup", async (req, res) => {
    try {
        const user = userSignupZod.safeParse(req.body)
        if (user.success) {
            if (await User.exists({ username: user.data.username })) {
                return res.status(409).json({
                    message: "User Already exists"
                })
            }
            const newUser = await User({
                username: user.data.username,
                firstname: user.data.firstname,
                lastname: user.data.lastname
            })
            const userId = newUser._id;
            await Account.create({
                userId,
                balance: Math.floor(1 + Math.random() * 10000)
            })
            
            var hashedPassword = await newUser.createHash(user.data.password)
            newUser.password = hashedPassword

            await newUser.save()
            const token = jwt.sign({ userId }, JWT_SECRET)
            return res.status(201).json({
                message: "User created successfully.",
                token: token
            });
        }
    } catch (error) {
        console.log("routes :: userRouter :: signup :: error ::", error);

    }
})

userRouter.post("/signin", async (req, res) => {
    try {
        const {success } = userSigninZod.safeParse(req.body)
        if (!success) {
            return res.status(411).json({ message: "Missing values"})
        }
        const user = await User.findOne({ username: req.body.username })

        if (!user) {
            return res.status(400).json({ message: "User not found."})
        }
        const userId = user._id;

        if (await user.validatePassword(req.body.password)) {
            const token = await jwt.sign({userId}, JWT_SECRET)
            return res.status(200).json({
                token: token
            })
        } else {
            return res.status(411).json({
                message: "Error while logging in"
            })
        }
    } catch (error) {
        console.log("routes :: userRouter :: signin :: error ::", error);
    }
})

userRouter.get("/bulk", async (req, res)=>{
    const filter = req.query.filter || ""

    const users = await User.find({
        $or: [{
            firstname: {
                $regex: filter
            },
            lastname: {
                $regex: filter
            }
        }]
    })

    res.json({user : users.map(user=>({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id
    }))})
})

userRouter.put("/", authMiddleware, async (req, res)=>{
    const {success} = updateUserZod.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Missing values"
        })
    }
    await User.updateOne({_id:req.userId}, req.body)
    return res.status(200).json({
        message: "Update successful"
    })
})

module.exports = {
    userRouter
}