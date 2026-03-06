const router = require("express").Router()
const multer = require("multer")
const extractText = require("../services/pdfService")
const chunkText = require("../services/ragService")
const Sop = require("../models/Sop")

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/upload", upload.single("file"), async (req, res) => {
  try {

    const text = await extractText(req.file.buffer)

    const chunks = chunkText(text)

    const sop = new Sop({
      filename: req.file.originalname,
      chunks
    })

    await sop.save()

    res.json({ msg: "SOP uploaded successfully" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router