const z = require("zod")

const userSignupZod = z.object({
    username: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string()
})

const userSigninZod = z.object({
    username: z.string().email(),
    password: z.string()
})

const updateUserZod = z.object({
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
})
module.exports = {userSignupZod, userSigninZod, updateUserZod}