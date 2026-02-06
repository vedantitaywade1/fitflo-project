const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user, // decoded info from JWT
  });
});

module.exports = router;
