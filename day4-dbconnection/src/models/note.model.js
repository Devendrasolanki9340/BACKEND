

const mongoose = require("mongoose")


let notesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        minlength : 10,
        required : true,
    },
})

const noteModel = mongoose.model("note",notesSchema)

module.exports = noteModel
