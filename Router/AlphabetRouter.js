const express = require('express');
const AlphabetRouter = express.Router();
AlphabetRouter.use(express.json())
AlphabetRouter.use(express.urlencoded())
const Alphabet = require('../models/Alphabet')

AlphabetRouter.get('/',(req, res) => {
  Alphabet
  .find()
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

AlphabetRouter.get('/vowels',(req, res) => {
  Alphabet
  .find({Type: "Vowels"})
  .then(data => res.json(data))
  .catch(err => res.json(err))
});
AlphabetRouter.get('/consonants',(req, res) => {
  Alphabet
  .find({Type: "Consonants"})
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

AlphabetRouter.get('/:id',(req, res) => {
  Alphabet
  .findById(req.params.id) //findOne({ _id: req.params.id }
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
