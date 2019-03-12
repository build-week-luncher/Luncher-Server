const jwt = require("jsonwebtoken");

const secret = require("./secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // is it valid?
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid token. YOU SHALL NOT PASS!" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "No token provided. Please log in to receive a valid token!"
    });
  }
};
