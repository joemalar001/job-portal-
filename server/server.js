const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes"); // ✅ THIS LINE IS CRITICAL

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

// ✅ ROUTES
app.use("/jobs", jobRoutes);
app.use("/auth", authRoutes); // ✅ THIS ENABLES /auth/register

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
