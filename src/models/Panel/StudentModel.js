const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rollNumber: { type: String, required: true, unique: true },
    course: { type: String },
    department: { type: String },
    year: { type: Number },
    marks: { type: Number },
    attendance: { type: Number },
    guardianName: { type: String },
    guardianContact: { type: String },
    assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
