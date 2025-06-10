const Teacher = require("../../models/Panel/TeacherModel");

exports.createTeacher = async (req, res) => {
  const teacher = new Teacher(req.body);
  const saved = await teacher.save();
  res.status(201).json(saved);
};

exports.getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find().populate('user assignedStudents');
  res.json(teachers);
};

exports.getTeacherById = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id).populate('user assignedStudents');
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
  res.json(teacher);
};

exports.updateTeacher = async (req, res) => {
  const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: 'Teacher deleted' });
};

exports.getOwnProfile = async (req, res) => {
  const teacher = await Teacher.findOne({ user: req.user.id }).populate('user assignedStudents');
  res.json(teacher);
};