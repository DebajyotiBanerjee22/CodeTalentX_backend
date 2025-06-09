const Meeting = require('../../models/Parent_Teachers/meetingModel');

exports.scheduleMeeting = async (req, res) => {
  try {
    const { parentId, teacherId, date, time } = req.body;

    const meeting = await Meeting.create({ parentId, teacherId, date, time });

    res.status(201).json({ message: 'Meeting scheduled', data: meeting });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMeetings = async (req, res) => {
  try {
    const { teacherId } = req.query;

    const meetings = await Meeting.find({ teacherId }).sort({ date: 1 });

    res.json(meetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};