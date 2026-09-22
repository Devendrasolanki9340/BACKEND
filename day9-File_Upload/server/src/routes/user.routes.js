
const express = require("express")
const { create } = require("../controller/user.controller")
const uploads = require("../config/multer.config")

const router = express.Router()

router.post("/create", uploads.single("profile_pic"), create)

module.exports = router
