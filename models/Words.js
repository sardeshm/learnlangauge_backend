const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Word = new Schema({
  MarathiName: String,
  MarathiPronunciation: String,
  EnglishName: String,
  GermanName: String,
  Image: String,
  Type: String,
});

module.exports = mongoose.model("Words", Word);
