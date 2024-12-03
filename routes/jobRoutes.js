const express = require("express");
const router = express.Router();
const { createJob, getAllJobs } = require("../controllers/jobController");

// POST /create/job
router.post("/create", createJob);

router.get("/getJobs", getAllJobs);

module.exports = router;