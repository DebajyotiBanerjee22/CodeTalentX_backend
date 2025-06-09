const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const { globalErrorHandler } = require("./src/utils/globalErrorhandler");
require("dotenv").config();

const connectDB = require("./src/config/dbConnect");
const userRoutes = require("./src/routes/userRoutes");
const studentRoutes = require("./src/routes/Panel/studentRoutes");
const teacherRoutes = require("./src/routes/Panel/teacherRoutes");
const AdminRoutes = require("./src/routes/Panel/AdminRoutes");
const informationRoutes = require("./src/routes/Student_Info/informationRoutes");

const attendanceRoutes = require('./src/routes/Attendance/attendanceRoutes');
const examRoutes = require('./src/routes/Examination_Report/examRoutes');
const reportCardRoutes = require('./src/routes/Examination_Report/reportcardModel');
const feeRoutes = require('./src/routes/Fees_Management/feesRoutes');
const messageRoutes = require('./src/routes/Parent_Teachers/messageRoutes');
const meetingRoutes = require('./src/routes/Parent_Teachers/meetingRoutes');



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(globalErrorHandler);

// Enable CORS with credentials

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(cors());

connectDB();

app.use("/users", userRoutes);
app.use("/students",studentRoutes);
app.use("/teachers",teacherRoutes);
app.use("/admin", AdminRoutes);
app.use("/student_Info",informationRoutes);

app.use("/attendance", attendanceRoutes);
app.use("/exams",examRoutes);
app.use("/report-card", reportCardRoutes);
app.use("/fees", feeRoutes);
app.use('/messages', messageRoutes);
app.use('/meetings', meetingRoutes);


app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
   