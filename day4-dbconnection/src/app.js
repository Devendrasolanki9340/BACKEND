
const express = require("express")
const conectDb = require("./config/db")
const noteModel = require("./models/note.model")

const app  = express()
app.use(express.json())

    conectDb()
    
app.get("/",(req,res)=>{
    res.send("done ha bhai")
})


app.post("/create", async(req, res) => {
    let {title ,description} = req.body
    
    const newNote = await noteModel.create({
        title : title,
        description : description
    })
    res.send({
        success : true,
        message: "note created successfully",
        data : newNote,
    })
})

module.exports = app