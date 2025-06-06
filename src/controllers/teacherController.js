// let students = [];

// exports.createStudent = (req, res) => {
//   const { name } = req.body;
//   const id = students.length;
//   students.push({ id, name });
//   res.status(201).json({ message: "Student created", student: { id, name } });
// };

// exports.getAllStudents = (req, res) => {
//   res.json(students);
// };

// exports.updateStudent = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   if (students[id]) {
//     students[id].name = name;
//     res.json({ message: "Student updated", student: students[id] });
//   } else {
//     res.status(404).json({ message: "Student not found" });
//   }
// };

// exports.deleteStudent = (req, res) => {
//   const { id } = req.params;
//   if (students[id]) {
//     students.splice(id, 1);
//     res.json({ message: "Student deleted" });
//   } else {
//     res.status(404).json({ message: "Student not found" });
//   }
// };


const User = require("../models/userModel");

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher" });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password, role: "teacher" });
    await user.save();
    res.status(201).json({ message: "Teacher created", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Teacher updated", updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

