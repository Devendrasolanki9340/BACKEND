
const NotesModel = require('../models/notes.model');


//  Crate controller
 const createNotesController= async (req, res) => {
    try {
        let { title, description } = req.body;

        let newNotes = await NotesModel.create({
            title: title,
            description: description
        });

        return res.status(201).json({
            message: 'Notes create successfully',
            data: newNotes
        });
    } catch (error) {
         res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
        console.log('error in creation', error);
    }
}

//  Read all notes controller
const getAllNotesController = async (req, res)=>{
    try {
        const allNotes = await NotesModel.find()
        res.status(200).json({
            message:"All notes Fetched",
            data: allNotes
        })
    } catch (error) {
         res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
        console.log("error in get notes api", error)
    }
}

// Read single note controller
const getSingleNoteController = async (req, res) => {
    try {
        const noteId = req.params.id;

        let note = await NotesModel.findById(noteId);
        res.status(200).json({
            message: "Note fetched successfully",
            data: note
        });
    } catch (error) {
         res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
        console.log("error in get notes api", error);
    }
}

// Update note controller

const updateNoteController = async (req, res) => {
    try {
        let  noteId = req.params.id;
        let body = req.body;

        let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body,{new: true,});

        return res.status(200).json({
            message: "Note updated successfully",
            data: updatedNote
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


// Delete note controller

const deleteNotesController = async (req, res)=>{
    try {
        let noteId = req.params.id;
        await NotesModel.findByIdAndDelete(noteId)

        return res.status(200).json({
            message :"Note deleted successfully"
        })  
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


module.exports = { createNotesController, getAllNotesController, getSingleNoteController, updateNoteController,deleteNotesController };
