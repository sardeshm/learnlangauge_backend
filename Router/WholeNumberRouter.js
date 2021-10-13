const express = require('express');
const WholeNumberRouter = express.Router();
WholeNumberRouter.use(express.json())
WholeNumberRouter.use(express.urlencoded())
const Wholenumber = require('../models/Wholenumber')

WholeNumberRouter.get('/',(req, res) => {
  Wholenumber
  .find()
  .populate('numberId')
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

WholeNumberRouter.post('/', (req,res) =>{
  Wholenumber
  .create(req.body)
  .then(newNumber => res.json(newNumber))
  .catch(err => res.json(err))
})

WholeNumberRouter.put('/:id', (req,res) =>{
  Wholenumber
  .updateOne({_id : req.params.id}, {$set: req.body})
  .then(updatedNumber => res.json(updatedNumber))
  .catch(err => res.json)
})

WholeNumberRouter.delete('/:id', (req,res) => {
    Number
    .deleteOne({
        _id : req.params.id
    })
    .then(() => res.json('Document deleted'))
    .catch(err => res.json(err))
})

module.exports = WholeNumberRouter;
