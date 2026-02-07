exports.validatePeriod = (req, res, next) => {
  const { start_date, end_date } = req.body;

  if (!start_date || !end_date) {
    return res.status(400).json({
      success: false,
      message: "Start date and end date are required",
    });
  }

  next();
};

exports.validateWorkout = (req, res, next) => {
  const { title, duration } = req.body;

  if (!title || !duration) {
    return res.status(400).json({
      success: false,
      message: "Title and duration are required",
    });
  }

  next();
};
