const express = require('express');
const router = express.Router();
const { scheduleMeeting, getMeetings } = require('../../controllers/Parent_Teachers/meetingController');

router.post('/schedule', scheduleMeeting);
router.get('/', getMeetings);

module.exports = router;