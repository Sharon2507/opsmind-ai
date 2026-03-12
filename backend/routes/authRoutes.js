const express = require("express")
const router = express.Router()

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// SIGNUP
router.post("/signup", async (req, res) => {
  try {

    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = new User({
      email,
      password: hash
    })

    await user.save()

    res.json({ msg: "User registered successfully" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ msg: "User not found" })
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      return res.status(400).json({ msg: "Invalid password" })
    }

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1d" })

    res.json({ token })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

})

module.exports = router