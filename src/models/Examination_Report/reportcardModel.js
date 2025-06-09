const mongoose = require('mongoose');

const reportCardSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  term: { type: String, required: true }, // e.g., "Term 1"
  results: [
    {
      subject: { type: String, required: true },
      marksObtained: { type: Number, required: true },
      totalMarks: { type: Number, required: true }
    }
  ],
  overallPercentage: Number,
  grade: String,
  remarks: String
});

module.exports = mongoose.model('ReportCard', reportCardSchema);