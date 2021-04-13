const mongoose = require("mongoose")
const aquaSchema = mongoose.Schema({
name: String,
type: String,
cost: Number
})
module.exports = mongoose.model("aqua", aquaSchema)