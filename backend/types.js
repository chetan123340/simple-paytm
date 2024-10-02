const z = require("zod")

const userZod = z.object({
    username: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string()
})

module.exports = userZod