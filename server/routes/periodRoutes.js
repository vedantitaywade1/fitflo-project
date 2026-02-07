const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");
const {
  addPeriod,
  getMyPeriods,
} = require("../controllers/periodController");

router.post("/", authenticateToken, addPeriod);
router.get("/", authenticateToken, getMyPeriods);

module.exports = router;
