const express = require("express");
const app = express();
const PORT = 3006;
const mongoose = require('mongoose')
require('dotenv').config()

const AlphabetRouter = require('./Router/AlphabetRouter')
const WholeNumberRouter = require ('./Router/WholeNumberRouter')

 app.use(express.json())
 app.use(express.urlencoded( {
    extended : true
 }))

app.get ('/', (req, res) => {
    res.send('Hello')
})


app.use('/alphabets', AlphabetRouter)
app.use('/wholenumbers', WholeNumberRouter)

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser : true})

db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongo connection error'))



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))