const express = require("express")
const multer = require("multer")
const pdf = require("pdf-parse")
const fs = require("fs")

const router = express.Router()

let pdfText = ""

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

router.post("/upload", upload.single("file"), async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" })
    }

    const buffer = fs.readFileSync(req.file.path)

    const data = await pdf(buffer)

    pdfText = data.text

    console.log("PDF loaded successfully")

    res.json({ msg: "PDF uploaded successfully" })

  } catch (err) {

    console.log(err)

    res.status(500).json({ error: "PDF processing failed" })

  }

})

const getPDFText = () => pdfText

module.exports = { router, getPDFText }