const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv")
require('dns').setDefaultResultOrder('ipv4first')

dotenv.config()

const { connectDB } = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const { router: sopRoutes } = require("./routes/sopRoutes")
const chatRoutes = require("./routes/chatRoutes")

const app = express()

// connect database
connectDB()

// middleware
app.use(cors())
app.use(express.json())

// test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("OpsMind AI Backend Running 🚀")
})

// routes
app.use("/api/auth", authRoutes)
app.use("/api/sop", sopRoutes)
app.use("/api/chat", chatRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})