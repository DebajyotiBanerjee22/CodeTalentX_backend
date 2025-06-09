const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema({
  subject: String,
  marks: Number,
  grade: String,
});

const attendanceSchema = new mongoose.Schema({
  totalPresent: Number,
  totalAbsent: Number,
  attendancePercentage: Number,
});

const StudentInfoSchema = new mongoose.Schema({
  name: String,
  grade: String,
  enrollmentNo: String,
  classTeacher: String,
  academicRecord: [academicSchema],
  attendance: attendanceSchema,
  email: String,
  contact: String,
});
module.exports = mongoose.model("StudentInfo",StudentInfoSchema);
