
const express = require('express');
const { createNotesController,getAllNotesController,getSingleNoteController,updateNoteController,singleEntityUpdatedController,deleteNotesController } = require('../controllers/notes.controller');
const NotesModel = require('../models/notes.model');

const router = express.Router();

//  api to create notes

//  Crate
router.post("/create", createNotesController) 

//  READ
router.get("/allNotes", getAllNotesController)

//  READ single note by id 
router.get("/:id", getSingleNoteController);

// UPDATE single note by id via PUT
router.put("/:id", updateNoteController);

//  UPDate VIa PATCH
router.patch("/:id/single",singleEntityUpdatedController)

// DELETE single note by id
router.delete("/:id", deleteNotesController )


module.exports = router;