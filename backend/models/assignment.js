const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema ({
    title: String,
    difficulty: String,
    description: String,
    question: String
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;