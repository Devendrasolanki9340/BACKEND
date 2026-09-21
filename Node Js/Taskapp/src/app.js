// sercer ko create krna 

const express = require('express');


const app = express();
app.use(express.json()); // ye middleware hai jo json data ko parse krta hai

const notes =[]

//title and description

// post  /notes
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({ message: 'Note created successfully' });
});

// get /notes
app.get('/notes', (req, res) => {

    res.status(200).json({
        message:'Notes fetched successfully',
        notes:notes
    })
});

// delete /notes/:1 

app.delete('/notes/:index', (req, res) => {

    const index = req.params.index;

    delete notes[index];
    
    res.status(200).json({ message: 'Note deleted successfully' });
});

//patch /notes/:index

app.patch('/notes/:index', (req, res) => {

    const index = req.params.index;
    const description  = req.body.description;

    notes[index].description = description;

    res.status(200).json({ 
        message: 'Note updated successfully' 
    });
});


module.exports = app;