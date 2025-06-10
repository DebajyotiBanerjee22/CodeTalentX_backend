const express = require('express');
const router = express.Router();
const { generateReportCard, getReportCard } = require('../../controllers/Examination_Report/reportcardController');

router.post('/generate', generateReportCard);
router.get('/:studentId', getReportCard);

module.exports = router;

// API  Test
// http://localhost:5000/report-card/generat =Post=Create 
// http://localhost:5000/report-card/studentId = Get = Read