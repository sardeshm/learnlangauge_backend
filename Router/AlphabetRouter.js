const express = require('express');
const AlphabetRouter = express.Router();
AlphabetRouter.use(express.json())
AlphabetRouter.use(express.urlencoded())
const Alphabet = require('../models/Alphabet')

AlphabetRouter.get('/',(req, res) => {
  Alphabet
  .find()
  .populate('languageId')
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

AlphabetRouter.post('/', (req,res) =>{
  Alphabet
  .create(req.body)
  .then(newAlphabet => res.json(newAlphabet))
  .catch(err => res.json(err))
})

AlphabetRouter.put('/:id', (req,res) =>{
  Alphabet.updateOne({_id : req.params.id}, {$set: req.body})
  .then(updatedAlphabet => res.json(updatedAlphabet))
  .catch(err => res.json)
})

AlphabetRouter.delete('/:id', (req,res) => {
  Alphabet
  .deleteOne({
      _id : req.params.id
  })
  .then(() => res.json('Alphabet deleted'))
  .catch(err => res.json(err))
})

module.exports = AlphabetRouter;
