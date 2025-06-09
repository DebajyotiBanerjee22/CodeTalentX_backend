const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../../controllers/Parent_Teachers/messageController');

router.post('/send', sendMessage);
router.get('/', getMessages);

module.exports = router;