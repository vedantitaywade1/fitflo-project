const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

const {
  addWorkout,
  getMyWorkouts,
} = require("../controllers/workoutController");

router.post("/", authenticateToken, addWorkout);
router.get("/", authenticateToken, getMyWorkouts);

module.exports = router;
