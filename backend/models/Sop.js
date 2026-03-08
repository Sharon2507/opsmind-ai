const mongoose = require("mongoose")

const SopSchema = new mongoose.Schema({
filename:String,
chunks:[String],
embeddings:[[Number]]
})

module.exports = mongoose.model("Sop",SopSchema)