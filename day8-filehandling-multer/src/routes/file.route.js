
const express = require("express")
const upload = require("../config/multer")

const router = express.Router()

router.post("/", upload.single("image"), (req, res) => {
    try {
        const body = req.body
        const file = req.file

        // if (!file) {
        //     return res.status(400).json({
        //         message: "No file uploaded. Please send an image field."
        //     })
        // }

        console.log(body)
        console.log(file)

        res.status(200).json({
            message: "file received successfully",
            file
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

module.exports = router