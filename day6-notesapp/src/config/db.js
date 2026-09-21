

const mongoose = require('mongoose');


const connectDB  = async()=>{
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("error while connecting db",error) 
    }
}

module.exports = connectDB;