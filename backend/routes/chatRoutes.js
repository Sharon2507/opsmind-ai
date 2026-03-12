const express = require("express")

const router = express.Router()

const { getPDFText } = require("./sopRoutes")

router.post("/", (req, res) => {

  const { question } = req.body

  const pdfText = getPDFText()

  if (!pdfText) {
    return res.json({ answer: "Please upload SOP PDF first." })
  }

  if (pdfText.toLowerCase().includes(question.toLowerCase())) {

    res.json({ answer: "Information found in SOP document." })

  } else {

    res.json({ answer: "Answer not found in SOP." })

  }

})

module.exports = router