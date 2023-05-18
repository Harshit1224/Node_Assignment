const mongoose = require("mongoose")
const recordSchema = new mongoose.Schema({
  roll:Number,
  name: String,     
  dateOfBirth:Date,
  score:Number 
});
const recordModel = mongoose.model("Student", recordSchema)
module.exports= recordModel;