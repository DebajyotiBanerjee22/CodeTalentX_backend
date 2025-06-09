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



// const User = require("../models/userModel");

// exports.getAllTeachers = async (req, res) => {
//   try {
//     const teachers = await User.find({ role: "teacher" });
//     res.json(teachers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createTeacher = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = new User({ username, email, password, role: "teacher" });
//     await user.save();
//     res.status(201).json({ message: "Teacher created", user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updateTeacher = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.json({ message: "Teacher updated", updated });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteTeacher = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.findByIdAndDelete(id);
//     res.json({ message: "Teacher deleted" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// const User = require("../models/userModel");
// const bcrypt = require("bcryptjs");

// // Create Teacher
// exports.createTeacher = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already in use" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const teacher = new User({ username, email, password: hashedPassword, role: "teacher" });

//     await teacher.save();
//     res.status(201).json({ message: "Teacher created", teacher });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get All Teachers
// exports.getAllTeachers = async (req, res) => {
//   try {
//     const teachers = await User.find({ role: "teacher" });
//     res.json(teachers);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// //  Update Teacher
// exports.updateTeacher = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.json({ message: "Teacher updated", updated });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// //  Delete Teacher
// exports.deleteTeacher = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.findByIdAndDelete(id);
//     res.json({ message: "Teacher deleted" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };



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