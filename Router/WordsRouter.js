const express = require('express');
const WordsRouter = express.Router();
WordsRouter.use(express.json())
WordsRouter.use(express.urlencoded())
const Word = require('../models/Words')

WordsRouter.get('/',(req, res) => {
  Word
  .find()
  .populate('UserId')
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

WordsRouter.post('/', (req,res) =>{
  Word
  .create(req.body)
  .then(newWord => res.json(newWord))
  .catch(err => res.json(err))
})

WordsRouter.put('/:id', (req,res) =>{
  Word.updateOne({_id : req.params.id}, {$set: req.body})
  .then(updatedWord => res.json(updatedWord))
  .catch(err => res.json)
})

module.exports = WordsRouter;
