const db = require("../config/db");

exports.addWorkout = (req, res) => {
  const { title, duration, calories } = req.body;
  const userId = req.user.id;

  if (!title || !duration || !calories) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO workouts (user_id, title, duration, calories)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [userId, title, duration, calories], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({
      message: "Workout added successfully",
      workoutId: result.insertId,
    });
  });
};

exports.getMyWorkouts = (req, res) => {
  const userId = req.user.id;

  const query = "SELECT * FROM workouts WHERE user_id = ?";

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json(results);
  });
};
