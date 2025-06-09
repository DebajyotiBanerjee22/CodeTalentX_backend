const express = require('express');
const router = express.Router();
const {
  markAttendance,
  viewAttendance,
  downloadReport
} = require('../../controllers/Attendance/attendanceController');

router.post('/mark', markAttendance);
router.get('/view/:studentId', viewAttendance);
router.get('/report/:classId', downloadReport);

module.exports = router;