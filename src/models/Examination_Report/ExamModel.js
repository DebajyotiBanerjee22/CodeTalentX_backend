const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  subject: { type: String, required: true },
  examDate: { type: Date, required: true },
  totalMarks: { type: Number, required: true }
});

module.exports = mongoose.model('Examination', examSchema);