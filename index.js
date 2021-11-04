require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
//const transporter = require("./middleware/transporter");
const cors = require("cors");

app.use(cors());
const AlphabetRouter = require("./Router/AlphabetRouter");
const WholeNumberRouter = require("./Router/WholeNumberRouter");
//const TransporterRouter = require("./Router/TransporterRouter");
//console.log(WholeNumberRouter);

const WordsRouter = require("./Router/WordsRouter");
const PracticeImageRouter = require("./Router/PracticeImageRouter");
//console.log(PracticeImageRouter);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/alphabets", AlphabetRouter);
//app.use("/send", TransporterRouter);
app.use("/wholenumbers", WholeNumberRouter);
app.use("/words", WordsRouter);
app.use("/image", PracticeImageRouter);

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
