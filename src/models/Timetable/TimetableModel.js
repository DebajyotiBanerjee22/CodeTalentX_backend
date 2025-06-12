const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  periods: [{ time: String, subject: String }]
});

const timeTableSchema = new mongoose.Schema({
  className: { type: String, required: true },
  schedule: [scheduleSchema]
});

module.exports = mongoose.model('TimeTable', timeTableSchema);