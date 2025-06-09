const ReportCard = require('../../models/Examination_Report/reportcardModel');

exports.generateReportCard = async (req, res) => {
  try {
    const { studentId, classId, term, results, remarks } = req.body;

    const totalObtained = results.reduce((sum, r) => sum + r.marksObtained, 0);
    const totalMarks = results.reduce((sum, r) => sum + r.totalMarks, 0);
    const percentage = (totalObtained / totalMarks) * 100;

    const grade =
      percentage >= 90 ? 'A+' :
      percentage >= 75 ? 'A' :
      percentage >= 60 ? 'B' :
      percentage >= 40 ? 'C' : 'F';

    const report = await ReportCard.create({
      studentId,
      classId,
      term,
      results,
      overallPercentage: percentage,
      grade,
      remarks
    });

    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReportCard = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const reportCards = await ReportCard.find({ studentId }).populate('studentId', 'name');
    res.json(reportCards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};