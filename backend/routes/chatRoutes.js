const router = require("express").Router()
const Sop = require("../models/Sop")
const axios = require("axios")

router.post("/",async(req,res)=>{

const {question}=req.body

const sop = await Sop.findOne()

let context = sop.chunks.slice(0,5).join("\n")

const response = await axios.post(
"https://api.openai.com/v1/chat/completions",
{
model:"gpt-4.1-mini",
messages:[
{role:"system",content:"Answer only from SOP context"},
{role:"user",content:`Context:${context}\nQuestion:${question}`}
]
},
{
headers:{
Authorization:`Bearer ${process.env.OPENAI_KEY}`
}
}
)

res.json(response.data.choices[0].message.content)

})

module.exports = router