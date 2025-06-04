
let teachers = [];

exports.createTeacher = (req, res) => {
  const { name } = req.body;
  const id = teachers.length;
  teachers.push({ id, name });
  res.status(201).json({ message: "Teacher created", teacher: { id, name } });
};

exports.getAllTeachers = (req, res) => {
  res.json(teachers);
};

exports.updateTeacher = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (teachers[id]) {
    teachers[id].name = name;
    res.json({ message: "Teacher updated", teacher: teachers[id] });
  } else {
    res.status(404).json({ message: "Teacher not found" });
  }
};

exports.deleteTeacher = (req, res) => {
  const { id } = req.params;
  if (teachers[id]) {
    teachers.splice(id, 1);
    res.json({ message: "Teacher deleted" });
  } else {
    res.status(404).json({ message: "Teacher not found" });
  }
};
