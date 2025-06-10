const express = require('express');
const router = express.Router();
const { scheduleExam, getExamsByClass } = require('../../controllers/Examination_Report/ExamController');

router.post('/schedule', scheduleExam);
router.get('/:classId', getExamsByClass);

module.exports = router;


             // ApI Testing 
// http://localhost:5000/exams/schedule = create
// http://localhost:5000/exams/60f7c9f7a2c8a937d0f3c4b1 = Get      // Need for Some changes 
