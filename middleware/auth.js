// const jwt = require("jsonwebtoken");

// const verifyToken = (req,res,next) => {
//     const token = req.header("auth-token");
//     if(!token) return res.status(401).send("Access denied");
     
//     try{
//         const verified = jwt.verrify(token, process.env.SECRET)
//     }
// };