const db = require("../config/db");

const addPeriodService = (userId, start_date, end_date, symptoms, notes) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO periods (user_id, start_date, end_date, symptoms, notes)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [userId, start_date, end_date, symptoms, notes],
      (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      }
    );
  });
};

const getMyPeriodsService = (userId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM periods WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  addPeriodService,
  getMyPeriodsService,
};
