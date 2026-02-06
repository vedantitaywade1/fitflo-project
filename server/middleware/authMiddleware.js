const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // 1️⃣ Get token from headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) return res.status(401).json({ message: "Access denied. Token missing." });

  // 2️⃣ Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token." });
    req.user = user; // Save decoded user info
    next(); // proceed to the route
  });
};

module.exports = authenticateToken;
