// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "teacher", "student"],
    default: "student",
  },
  }, { timestamps: true });
const User = mongoose.model('User', userSchema);
module.exports = User;
  //  enum: [0, 1, 2], // 0: student, 1: teacher, 2: admin