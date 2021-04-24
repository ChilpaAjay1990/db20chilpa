const mongoose = require("mongoose")
const aquaSchema = mongoose.Schema({
name: {
      type: String,
      required: [true,"name is required"]
    } ,String,
type:{
        type: String,
        required: [true,"type is required"],

     } ,
cost:  {
       type: Number,
        required: [true,"cost of the aqua is required"],
        min:[1290,"cost Should be minimum of 1290$ "],
        max:[3000,"cost Cannot be greater than 3000$ "]
    }
})
module.exports = mongoose.model("aqua", aquaSchema)