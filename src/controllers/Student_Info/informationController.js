const StudentInfo = require("../../models/Student_Info/informationModel");

// Create Student Info
exports.createStudentInfo = async (req, res) => {
  try {
    const student = new StudentInfo(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Student Info
exports.getAllStudentInfo = async (req, res) => {
  try {
    const students = await StudentInfo.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Student Info by ID
exports.getStudentInfoById = async (req, res) => {
  try {
    const student = await StudentInfo.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Student Info
exports.updateStudentInfo = async (req, res) => {
  try {
    const student = await StudentInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Student Info
exports.deleteStudentInfo = async (req, res) => {
  try {
    const student = await StudentInfo.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


