
const TimeTable = require('../../models/Timetable/TimetableModel');
// Create or Update Timetable
exports.setTimeTable = async (req, res) => {
  try {
    const { className, schedule } = req.body;

    const existing = await TimeTable.findOne({ className });
    if (existing) {
      existing.schedule = schedule;
      await existing.save();
      return res.json({ message: 'Timetable updated', data: existing });
    }

    const newTimetable = await TimeTable.create({ className, schedule });
    res.status(201).json({ message: 'Timetable created', data: newTimetable });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get timetable by class
exports.getTimeTableByClass = async (req, res) => {
  try {
    const { className } = req.params;
    const timetable = await TimeTable.findOne({ className });

    if (!timetable) return res.status(404).json({ message: 'Not found' });

    res.json({ data: timetable });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};