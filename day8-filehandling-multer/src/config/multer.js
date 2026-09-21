
const multer = require("multer")

//  disk storage for local

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        console.log("in filename->", file)
        cb(null, Date.now()+"_" + file.originalname)
    },
})


//  memeory storage for server

// const storage = multer.memoryStorage()

const upload = multer({ storage })

module.exports = upload;