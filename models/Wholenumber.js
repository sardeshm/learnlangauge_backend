const mongoose = require('mongoose')
const Schema = mongoose.Schema
const WholeNumber = new Schema({
    
    Englishnumber : Number,
    Marathi : String,
    Marathipronunciation: String,
    Englishpronounciation : String,
    Germanpronounciation : String,
    NumberId : {
        type: mongoose.Schema.Types.ObjectId, ref : 'Number'

    }

})

module.exports = mongoose.model('WholeNumber', WholeNumber)