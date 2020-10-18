const mongoose = require("mongoose");


var flightSchema = new mongoose.Schema({
 checkinWeight: {
   type: Number,
   required: true,
   trim: true
 },
 cabinWeight: {
   type: Number,
   required: true,
   trim: true
 },
 arrTime: {
   type: Date,
   required: true
 },
 depTime: {
   type: Date,
   required: true
 },
 from: {
   type: String,
   required: true,
   trim: true,
   lowercase: true
 },
 to: {
   type: String,
   required: true,
   trim: true,
   lowercase: true
 },
 duration: {
   type: Number
 },
 company: {
   type: String,
   required: true,
   trim: true
 },
 price: {
   type: Number,
   required: true,
   trim: true
 }
});


module.exports = mongoose.model("Flight", flightSchema);