const db = require("../config/db");

exports.addPeriod = (req, res) => {
  const { start_date, end_date, symptoms, notes } = req.body;
  const userId = req.user.id;

  if (!start_date || !end_date) {
    return res.status(400).json({ message: "Start and end date are required" });
  }

  const query = `
    INSERT INTO periods (user_id, start_date, end_date, symptoms, notes)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [userId, start_date, end_date, symptoms, notes],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({
        message: "Period data added successfully",
        periodId: result.insertId,
      });
    }
  );
};

exports.getMyPeriods = (req, res) => {
  const userId = req.user.id;

  const query = "SELECT * FROM periods WHERE user_id = ?";

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json(results);
  });
};
