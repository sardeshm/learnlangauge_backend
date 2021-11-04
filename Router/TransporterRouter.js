// const express = require("express");
// const TransporterRouter = express.Router();
// TransporterRouter.use(express.json());
// TransporterRouter.use(express.urlencoded());
// const transporter = express.Router();

// TransporterRouter.post("/", (req, res) => {
//   console.log(req.body);
//   let mailOptions = {
//     from: `${req.body.email}`,
//     to: process.env.EMAIL,
//     subject: `Message from: ${req.body.email}`,
//     text: `${req.body.message}`,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("== Message Sent ==");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

// module.exports = TransporterRouter;
