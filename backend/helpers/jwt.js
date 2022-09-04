var { expressjwt: jwt } = require("express-jwt");
const secret = process.env.secret;
function authJwt() {
  return jwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/user/login"],
  });
}

module.exports = authJwt;

// const jwt = require("jsonwebtoken");

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.secret, (err, user) => {
//     console.log(err);

//     if (err) return res.sendStatus(403);

//     req.user = user;

//     next();
//   });
// }

// module.exports = authenticateToken;
