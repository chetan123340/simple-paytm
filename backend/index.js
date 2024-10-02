const express = require("express")
const mongoose = require("mongoose")
const { router } = require("./routes")
const cors = require("cors")
require('dotenv').config()


app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1", router)

app.listen(3000, async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0.${process.env.ID}.mongodb.net/paytm`)
        console.log("Listening on port 3000 and connected to db");
    } catch (error) {
        console.log({error: "error in index"+error});
        
    }
})