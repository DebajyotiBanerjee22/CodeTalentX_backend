const Message = require('../../models/Parent_Teachers/messageModel');

exports.sendMessage = async (req, res) => {
  try {
    const { parentId, teacherId, content } = req.body;

    const message = await Message.create({ parentId, teacherId, content });

    res.status(201).json({ message: 'Message sent successfully', data: message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { parentId, teacherId } = req.query;

    const messages = await Message.find({ parentId, teacherId }).sort({ sentAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};