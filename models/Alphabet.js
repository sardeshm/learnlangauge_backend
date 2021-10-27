const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Alphabet = new Schema({
    Marathi : String,
    English : String,
    German : String,
    Image : String,
    MarathiName: String,
    EnglishName : String,
    GermanName : String,
    Type : String
    })
   
    



module.exports = mongoose.model('Alphabet', Alphabet)