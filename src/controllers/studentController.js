
// let teachers = [];

// exports.createTeacher = (req, res) => {
//   const { name } = req.body;
//   const id = teachers.length;
//   teachers.push({ id, name });
//   res.status(201).json({ message: "Teacher created", teacher: { id, name } });
// };

// exports.getAllTeachers = (req, res) => {
//   res.json(teachers);
// };

// exports.updateTeacher = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   if (teachers[id]) {
//     teachers[id].name = name;
//     res.json({ message: "Teacher updated", teacher: teachers[id] });
//   } else {
//     res.status(404).json({ message: "Teacher not found" });
//   }
// };

// exports.deleteTeacher = (req, res) => {
//   const { id } = req.params;
//   if (teachers[id]) {
//     teachers.splice(id, 1);
//     res.json({ message: "Teacher deleted" });
//   } else {
//     res.status(404).json({ message: "Teacher not found" });
//   }
// };

const User = require("../models/userModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, role: "student" });
    await user.save();
    res.status(201).json({ message: "Student created", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Student updated", updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};