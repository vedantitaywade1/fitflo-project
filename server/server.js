require("dotenv").config();     // 👈 load .env
require("./config/db");        // 👈 connect MySQL

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 FitFlo server running on port ${PORT}`);
});
