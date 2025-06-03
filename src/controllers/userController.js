
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { GenerateToken } = require("../middleware/jwtAuth");
const { ApiError } = require("../utils/ApiError");
const { ApiRes } = require("../utils/ApiRes");

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw new ApiError(400, "All fields are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    const token = GenerateToken({ id: newUser._id });

    res
      .status(201)
      .json(
        new ApiRes(201, {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          token,
        }, "User registered successfully")
      );
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ApiError(400, "All fields are required");
    }

    const user = await User.findOne({ username });
    if (!user) {
      throw new ApiError(400, "User does not exist");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new ApiError(400, "Invalid password");
    }

    const token = GenerateToken({ id: user._id });

    res
      .status(200)
      .json(
        new ApiRes(200, {
          _id: user._id,
          username: user.username,
          email: user.email,
          token,
        }, "User logged in successfully")
      );
  } catch (err) {
    next(err);
  }
};

const logoutUser = (req, res, next) => {
  res
    .status(200)
    .json(new ApiRes(200, null, "Logged out successfully; please discard your token."));
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
