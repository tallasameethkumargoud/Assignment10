

const Job = require("../models/Job");

exports.createJob = async (req, res) => {
    try {
        const { companyName, jobTitle, description, salary } = req.body;

        // Validate required fields
        if (!companyName || !jobTitle || !description || salary == null) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new job
        const job = new Job({
            companyName,
            jobTitle,
            description,
            salary,
        });

        // Save job to the database
        await job.save();

        res.status(201).json({ message: "Job created successfully", job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        // Fetch all jobs from the database
        const jobs = await Job.find();

        // Send the job data as a JSON response with a 200 status
        res.status(200).json(jobs);
    } catch (error) {
        // Handle errors and send a 500 status with the error message
        res.status(500).json({ message: error.message });
    }
};