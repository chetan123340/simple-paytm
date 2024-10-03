const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

UserSchema.methods.createHash = async (plainTextPassword)=>{
    const saltRounds = 10;

    const salt = await bcrypt.genSaltSync(saltRounds)
    return await bcrypt.hash(plainTextPassword, salt)
}

UserSchema.methods.validatePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model("User", UserSchema)

module.exports = {
	User
};