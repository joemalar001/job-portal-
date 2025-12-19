const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// ✅ TEST ROUTE (IMPORTANT)
router.get("/test", (req, res) => {
    res.json({ message: "Job routes working" });
});

// ✅ GET ALL JOBS
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ ADD JOB
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {

    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ DELETE JOB
router.delete("/:id", async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: "Job deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
