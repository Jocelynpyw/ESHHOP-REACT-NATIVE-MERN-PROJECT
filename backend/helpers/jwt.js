var { expressjwt: jwt } = require("express-jwt");
const secret = process.env.secret;
function authJwt() {
  return jwt({
    secret,
    algorithms: ["HS256"],
    // isRevoked: isRevoked(),
  }).unless({
    path: [
      // expression reguliere pour avoir toutes les routes qui se mettent sous la forme /api/product
      { url: /\/api\/product(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/category(.*)/, methods: ["GET", "OPTIONS"] },
      "/api/user/login",
      "/api/user/register",
    ],
  });
}

async function isRevoked(req, payload, done) {
  if (payload.isAdmin) {
    done(null, true);
  }
  done();
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
