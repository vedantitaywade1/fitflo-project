const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

module.exports = app;

