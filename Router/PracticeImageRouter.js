const express = require("express");
const PracticeImageRouter = express.Router();
PracticeImageRouter.use(express.json());
PracticeImageRouter.use(express.urlencoded());

const PracticeImage = require("../models/PracticeImage");

PracticeImageRouter.get("/", (req, res) => {
  PracticeImage.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// PracticeImageRouter.get("", (req, res) => {
//   Image.find({ Type: "Vowels" })
//     .then((data) => res.json(data))
//     .catch((err) => res.json(err));
// });
PracticeImageRouter.get("/image", (req, res) => {
  PracticeImage.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

PracticeImageRouter.get("/:id", (req, res) => {
  PracticeImage.findById(req.params.id) //findOne({ _id: req.params.id }
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

PracticeImageRouter.post("/", (req, res) => {
  PracticeImage.create(req.body)
    .then((newImage) => res.json(newImage))
    .catch((err) => res.json(err));
});

PracticeImageRouter.put("/:id", (req, res) => {
  PracticeImage.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((updatedImage) => res.json(updatedImage))
    .catch((err) => res.json);
});

PracticeImageRouter.delete("/:id", (req, res) => {
  PracticeImage.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.json("Image deleted"))
    .catch((err) => res.json(err));
});

module.exports = PracticeImageRouter;
