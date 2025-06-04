const express = require("express");
const router = express.Router();
const {createStudent,getAllStudents,updateStudent,deleteStudent} = require("../controllers/studentController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware(["teacher", "admin"]),createStudent);
router.get("/",getAllStudents);
router.put("/:id", roleMiddleware(["teacher", "admin"]),updateStudent);
router.delete("/:id", roleMiddleware(["teacher", "admin"]),deleteStudent);

module.exports = router;