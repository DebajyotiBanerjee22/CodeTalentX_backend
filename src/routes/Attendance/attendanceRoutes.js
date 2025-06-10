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

         // API Test Url 
// http://localhost:5000/attendance/mark =Post = create
//http://localhost:5000/attendance/view/studentId  = Get= Read 
//http://localhost:5000/attendance/report/:classId = Get = Read
