const Examination = require('../../models/Examination_Report/ExamModel');

exports.scheduleExam = async (req, res) => {
  try {
    const { classId, subject, examDate, totalMarks } = req.body;
    const exam = await Examination.create({ classId, subject, examDate, totalMarks });
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getExamsByClass = async (req, res) => {
  try {
    const exams = await Examination.find({ classId: req.params.classId });
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};