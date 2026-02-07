const {
  addPeriodService,
  getMyPeriodsService,
} = require("../services/periodService");

exports.addPeriod = async (req, res, next) => {
  try {
    const { start_date, end_date, symptoms, notes } = req.body;
    const userId = req.user.id;

    if (!start_date || !end_date) {
      return res.status(400).json({ message: "Start and end date are required" });
    }

    const periodId = await addPeriodService(
      userId,
      start_date,
      end_date,
      symptoms,
      notes
    );

    res.status(201).json({
      message: "Period data added successfully",
      periodId,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMyPeriods = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const periods = await getMyPeriodsService(userId);
    res.status(200).json(periods);
  } catch (error) {
    next(error);
  }
};
