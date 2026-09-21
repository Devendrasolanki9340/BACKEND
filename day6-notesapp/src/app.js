const express = require('express');
const connectDB = require('./config/db');
const { createNotesController } = require('./controllers/notes.controller');
const notesRoute = require("./routes/notes.route");
const NotesModel = require('./models/notes.model');

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ok got it');
});

app.use("/notes",notesRoute)


module.exports = app;