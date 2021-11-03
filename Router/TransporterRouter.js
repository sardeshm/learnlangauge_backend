const express = require("express");
const TransporterRouter = express.Router();
TransporterRouter.use(express.json());
TransporterRouter.use(express.urlencoded());

TransporterRouter.post("/", (req, res) => {
  console.log(req.body);
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };

  Transporter.sendMail(mailOptions, function (err, data) {
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

module.exports = TransporterRouter;
