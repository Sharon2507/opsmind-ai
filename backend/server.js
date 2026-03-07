const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
require('dns').setDefaultResultOrder('ipv4first')

const { connectDB } = require("./config/db");


const authRoutes = require("./routes/authRoutes")
const sopRoutes = require("./routes/sopRoutes")
const chatRoutes = require("./routes/chatRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())



app.use("/api/auth",authRoutes)
app.use("/api/sop",sopRoutes)
app.use("/api/chat",chatRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))