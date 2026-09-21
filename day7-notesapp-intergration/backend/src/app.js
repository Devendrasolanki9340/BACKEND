const express = require('express');
const cors = require ("cors")
const connectDB = require('./config/db');
const { createNotesController } = require('./controllers/notes.controller');
const notesRoute = require("./routes/notes.route");
const NotesModel = require('./models/notes.model');

connectDB();
const app = express();

// .setup cors for frotend conntect port 
app.use(cors({
    origin:"http://localhost:5173",
}))


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ok got it');
});

app.use("/notes",notesRoute)


module.exports = app;