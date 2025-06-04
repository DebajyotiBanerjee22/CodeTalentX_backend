let students = [];

exports.createStudent = (req, res) => {
  const { name } = req.body;
  const id = students.length;
  students.push({ id, name });
  res.status(201).json({ message: "Student created", student: { id, name } });
};

exports.getAllStudents = (req, res) => {
  res.json(students);
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (students[id]) {
    students[id].name = name;
    res.json({ message: "Student updated", student: students[id] });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  if (students[id]) {
    students.splice(id, 1);
    res.json({ message: "Student deleted" });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};
