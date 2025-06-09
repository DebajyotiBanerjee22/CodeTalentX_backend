const Fee = require('../../models/Fees_Management/feesModel');

// Record a fee payment
exports.recordPayment = async (req, res) => {
  try {
    const { studentId, feeType, amountPaid, dateOfPayment } = req.body;

    const fee = await Fee.create({
      studentId,
      feeType,
      amountPaid,
      dateOfPayment
    });

    res.status(201).json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View payment status summary by student
exports.getPaymentStatus = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Define the expected fee types (you can fetch from DB if dynamic)
    const allFeeTypes = ['Tuition', 'Library'];

    const paidFees = await Fee.find({ studentId });

    const statusSummary = allFeeTypes.map(type => {
      const paid = paidFees.some(fee => fee.feeType === type);
      return {
        feeType: type,
        status: paid ? 'Paid' : 'Unpaid'
      };
    });

    res.json(statusSummary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};