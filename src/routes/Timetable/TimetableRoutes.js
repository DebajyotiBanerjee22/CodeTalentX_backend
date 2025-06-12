const express = require('express');
const router = express.Router();
const { setTimeTable, getTimeTableByClass } = require('../../controllers/Timetable/TimetableController');

router.post('/set', setTimeTable);
router.get('/:className', getTimeTableByClass);

module.exports = router;

// API END POINT
// http://localhost:5000/timetable/set =POST
// http://localhost:5000/timetable/classname = GET