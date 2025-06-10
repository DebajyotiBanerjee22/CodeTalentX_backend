const Attendance = require('../../models/Attendance/attendanceModel');

exports.markAttendance = async (req, res) => {
  try {
    const { date, classId, records } = req.body;

    const attendance = await Attendance.findOneAndUpdate(
      { date, classId },
      { records },
      { new: true, upsert: true }
    );

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const data = await Attendance.find({ 'records.studentId': studentId })
      .sort({ date: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.downloadReport = async (req, res) => {
  try {
    const { classId } = req.params;
    const data = await Attendance.find({ classId })
      .populate('records.studentId', 'name')
      .sort({ date: 1 });

    res.status(200).json(data); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};