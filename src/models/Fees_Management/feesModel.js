const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  feeType: { type: String, required: true },
  amountPaid: { type: Number, required: true },
  dateOfPayment: { type: Date, required: true }
});

module.exports = mongoose.model('Fee', feeSchema);