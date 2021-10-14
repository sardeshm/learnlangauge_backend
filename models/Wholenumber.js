const mongoose = require('mongoose')
const Schema = mongoose.Schema
const WholeNumber = new Schema({
    
    EnglishNumber : Number,
    Marathi : String,
    MarathiPronunciation: String,
    EnglishPronunciation : String,
    GermanPronunciation : String
    

})

module.exports = mongoose.model('WholeNumber', WholeNumber)