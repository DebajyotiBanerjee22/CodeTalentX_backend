const express = require('express');
const router = express.Router();
const { scheduleExam, getExamsByClass } = require('../../controllers/Examination_Report/ExamController');

router.post('/schedule', scheduleExam);
router.get('/:classId', getExamsByClass);

module.exports = router;