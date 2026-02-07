const db = require("../config/db");

exports.createWorkout = (userId, title, duration, calories) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO workouts (user_id, title, duration, calories)
      VALUES (?, ?, ?, ?)
    `;

    db.query(query, [userId, title, duration, calories], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.getWorkoutsByUser = (userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM workouts WHERE user_id = ?";

    db.query(query, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
