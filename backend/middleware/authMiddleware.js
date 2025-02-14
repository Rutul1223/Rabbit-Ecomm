const jwt = require("jsonwebtoken");
const User = require("../models/User");

// middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.error("Token Verification Failed:", error);
      res.status(401).json({ message: "Unauthorized, token failed!" });
    }
  } else {
    res.status(401).json({ message: "No authorized, no token provided!" });
  }
};

//Middleware to check if the user is an admin
const admin = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized, user is not an admin!" });
  }
};

module.exports = { protect, admin };
