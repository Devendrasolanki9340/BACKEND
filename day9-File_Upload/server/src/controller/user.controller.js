
const create = (req, res) => {
    console.log("Upload request received")
    console.log("Body:", req.body)
    console.log("File:", req.file)

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" })
    }

    return res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        data: {
            name: req.body.name,
            email: req.body.email,
            file: req.file.filename,
        },
    })
}

module.exports = { create }