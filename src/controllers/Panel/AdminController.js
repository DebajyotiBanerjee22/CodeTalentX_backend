
const Admin = require("../../models/Panel/AdminModel");
const User = require("../../models/userModel");

exports.createAdmin = async (req, res) => {
  const admin = new Admin(req.body);
  const saved = await admin.save();
  res.status(201).json(saved);
};

exports.getAllAdmins = async (req, res) => {
  const admins = await Admin.find().populate("user");
  res.json(admins);
};

exports.getAdminById = async (req, res) => {
  const admin = await Admin.findById(req.params.id).populate("user");
  if (!admin) return res.status(404).json({ message: "Admin not found" });
  res.json(admin);
};

exports.updateAdmin = async (req, res) => {
  const updated = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "Admin deleted" });
};

// exports.getOwnProfile = async (req, res) => {
//   const admin = await Admin.findOne({ user: req.user.id }).populate('user');
//   res.json(admin);
// };
