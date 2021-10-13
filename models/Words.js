const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Word = new Schema({
    Marathiname : String,
    Englishname : String,
    Germanname: String,
    UserId : {
        type: mongoose.Schema.Types.ObjectId, ref : 'User'

    }


})

module.exports = mongoose.model('Words', Word)