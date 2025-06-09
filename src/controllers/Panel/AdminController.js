// const User = require("../models/userModel");
// const bcrypt = require("bcryptjs");

// exports.createAdmin = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Admin already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const admin = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       role: "admin"
//     });

//     res.status(201).json({ message: "Admin created", admin: { username: admin.username, email: admin.email, role: admin.role } });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// //  Get all users (admin-only)
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// //  Change a user's role
// exports.changeUserRole = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { role } = req.body;

//     if (!["admin", "teacher", "student"].includes(role)) {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     const user = await User.findByIdAndUpdate(userId, { role }, { new: true }).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({ message: "Role updated", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Delete any user
// exports.deleteUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     await User.findByIdAndDelete(userId);
//     res.json({ message: "User deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

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
