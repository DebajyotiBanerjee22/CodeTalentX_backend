const express = require("express");
const router = express.Router();
const controller = require("../controllers/teacherController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware("admin"),createTeacher);
router.get("/",getAllTeachers);
router.put("/:id", roleMiddleware("admin"),updateTeacher);
router.delete("/:id", roleMiddleware("admin"), controller.deleteTeacher);

module.exports = router;