
const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect("mongodb+srv://yt:zq9u4cVKvL1GvPrT@yt-complete-backend,fz1zskm.mongodb.net/halley");
  console.log("Connected to MongoDB");
}

module.exports = connectDB;