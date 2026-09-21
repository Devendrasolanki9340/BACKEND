
const mongoose = require("mongoose")

const conectDb = async ()=>{
    try{
     await mongoose.connect(
        "mongodb://devendrasolanki9340438561561_db_user:Ham7FMu2vJr1yX8p@ac-hxalbik-shard-00-00.fxjoo2c.mongodb.net:27017,ac-hxalbik-shard-00-01.fxjoo2c.mongodb.net:27017,ac-hxalbik-shard-00-02.fxjoo2c.mongodb.net:27017/?ssl=true&replicaSet=atlas-n735ij-shard-0&authSource=admin&appName=Cluster0")

     console.log("monogodb connected haaaa")
    } catch(error){
        console.log("MongoDB connection  failed",error.message)
    }}


    module.exports = conectDb