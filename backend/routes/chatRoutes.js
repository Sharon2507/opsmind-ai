const express = require("express")
const router = express.Router()

const { getPDFText } = require("./sopRoutes")

router.post("/", (req, res) => {

  const { question } = req.body

  const pdfText = getPDFText()

  if (!pdfText) {
    return res.json({ answer: "Please upload SOP PDF first." })
  }

  const sentences = pdfText.split(".")

  let matchedSentence = ""

  for (let sentence of sentences) {
    if (sentence.toLowerCase().includes(question.toLowerCase())) {
      matchedSentence = sentence
      break
    }
  }

  if (matchedSentence) {
    res.json({ answer: matchedSentence })
  } else {
    res.json({ answer: "No relevant answer found in SOP." })
  }

})

module.exports = router