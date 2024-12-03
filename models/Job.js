const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    jobTitle: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Job", JobSchema);