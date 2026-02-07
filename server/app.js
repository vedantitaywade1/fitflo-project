const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const periodRoutes = require("./routes/periodRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const errorHandler = require("./middleware/errorMiddle");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/periods", periodRoutes);
app.use("/api/workouts", workoutRoutes);
app.use(errorHandler);

module.exports = app;
