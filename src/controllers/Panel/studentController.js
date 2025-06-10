
const Student = require('../../models/Panel/StudentModel');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find().populate('user assignedTeacher');
  res.json(students);
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id).populate('user assignedTeacher');
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
};

exports.updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};

exports.getOwnProfile = async (req, res) => {
  const student = await Student.findOne({ user: req.user.id }).populate('user assignedTeacher');
  res.json(student);
};