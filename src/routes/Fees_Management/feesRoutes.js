const express = require('express');
const router = express.Router();
const { recordPayment, getPaymentStatus } = require('../../controllers/Fees_Management/feesController');

// POST - Record Fee Payment
router.post('/record', recordPayment);

// GET - View Payment Status Summary
router.get('/status/:studentId', getPaymentStatus);

module.exports = router;


        // API Test
//http://localhost:5000/fees/record = Post
//http://localhost:5000/fees/status/studentId = Get 
