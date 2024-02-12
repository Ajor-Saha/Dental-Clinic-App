const jwt = require("jsonwebtoken");
const errorHandler = require("./error.js");


const verifyToken = async (req, res, next) => {
  const token = await req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
