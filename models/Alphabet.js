const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Alphabet = new Schema({
    Marathi : String,
    English : String,
    German : String,
    Image : String,
    Marathiname: String,
    Englishname : String,
    Germanname : String,
   
    languageId : {
        type: mongoose.Schema.Types.ObjectId, ref : 'Language'

    }

})

module.exports = mongoose.model('Alphabet', Alphabet)