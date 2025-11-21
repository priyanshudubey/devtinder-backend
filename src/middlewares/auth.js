const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login First");
    }

    const ok = await jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = ok;
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("No user found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error occured " + err.message);
  }
};

module.exports = { userAuth };
