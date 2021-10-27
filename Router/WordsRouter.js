const express = require("express");
const WordsRouter = express.Router();
WordsRouter.use(express.json());
WordsRouter.use(express.urlencoded());
const Word = require("../models/Words");

WordsRouter.get("/", (req, res) => {
  Word.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
WordsRouter.get("/vegetables", (req, res) => {
  Word.find({ Type: "Vegetable" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

WordsRouter.get("/colors", (req, res) => {
  Word.find({ Type: "Colors" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

  WordsRouter.get("/fruits", (req, res) => {
    Word.find({ Type: "Fruits" })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });
WordsRouter.get("/animals", (req, res) => {
  Word.find({ Type: "Animal" })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

WordsRouter.post("/", (req, res) => {
  Word.create(req.body)
    .then((newWord) => res.json(newWord))
    .catch((err) => res.json(err));
});

WordsRouter.put("/:id", (req, res) => {
  Word.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((updatedWord) => res.json(updatedWord))
    .catch((err) => res.json);
});

WordsRouter.post("/bulkInsert", (req, res) => {
  Word.insertMany(req.body)
    .then((updatedWord) => res.json(updatedWord))
    .catch((err) => res.json);
});

WordsRouter.put("/bulkUpdate", (req, res) => {
  Word.updateMany({ _id: req.params.id }, { $set: req.body })
    .then((updatedWord) => res.json(updatedWord))
    .catch((err) => res.json);
});

WordsRouter.delete("/:id", (req, res) => {
  Word.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.json("Word deleted"))
    .catch((err) => res.json(err));
});

module.exports = WordsRouter;
