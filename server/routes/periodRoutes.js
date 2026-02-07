const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");
const { validatePeriod } = require("../middleware/validateMiddleware");
const {
  addPeriod,
  getMyPeriods,
} = require("../controllers/periodController");

router.post("/", authenticateToken, validatePeriod, addPeriod);
router.get("/", authenticateToken, getMyPeriods);

module.exports = router;
