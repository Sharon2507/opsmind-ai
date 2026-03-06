const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

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

app.listen(5000,()=>console.log("Server running"))