const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PracticeImage = new Schema({
  Image: String,
});

module.exports = mongoose.model("PracticeImage", PracticeImage);
