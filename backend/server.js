require("dotenv").config(); // 👈 This must be the first line
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const apiRoutes = require("./routes/Routeall.js"); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Use Merged API Routes
app.use("/api", apiRoutes); // Handles /contact, /experience, /project

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
