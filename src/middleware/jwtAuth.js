
const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token." });
  }
};

const GenerateToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// const GenerateToken = (payload, expiresIn = "25m") => {
//   try {
//     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
//   } catch (err) {
//     console.error("JWT generation error:", err);
//     throw err;
//   }
// };

module.exports = {
  jwtAuthMiddleware,
  GenerateToken,
};


// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// // Middleware to protect routes
// const jwtAuthMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // Optional: Fetch user from DB to get latest role or details
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     req.user = user; // Attach full user to request
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token." });
//   }
// };

// // Utility to generate JWT token
// const GenerateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, role: user.role }, // keep it minimal
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );
// };

// module.exports = {
//   jwtAuthMiddleware,
//   GenerateToken,
// };



// const jwt = require("jsonwebtoken");

// const jwtAuthMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token." });
//   }
// };

// const GenerateToken = (userData, expiresIn = "1d") => {
//   if (!process.env.JWT_SECRET) {
//     throw new Error("JWT_SECRET is not defined");
//   }

//   return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn });
// };

// module.exports = {
//   jwtAuthMiddleware,
//   GenerateToken,
// };

