const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  adminId: { type: String, required: true, unique: true },
  position: { type: String },
  department: { type: String },
  officeContact: { type: String },
  emailAlt: { type: String },
  // authorityLevel: { type: String, enum: ['superadmin', 'moderator', 'manager'], default: 'moderator' },
  dateOfJoining: { type: Date },
  remarks: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);