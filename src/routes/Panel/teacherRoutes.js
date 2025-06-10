const express = require("express");
const router = express.Router();
const {createTeacher,getAllTeachers,updateTeacher,deleteTeacher,getTeacherById}= require("../../controllers/Panel/teacherController");
const roleMiddleware = require("../../middleware/roleMiddleware");
const { jwtAuthMiddleware } = require("../../middleware/jwtAuth");

router.use(jwtAuthMiddleware);

router.post("/", roleMiddleware("admin"),createTeacher);
router.get("/",getAllTeachers);
router.put("/:id", roleMiddleware("admin"),updateTeacher);
router.delete("/:id", roleMiddleware("admin"),deleteTeacher);
router.put("/:id", roleMiddleware("admin"),getTeacherById);
module.exports = router;




  // Api Test Url /Api End Point

// http://localhost:5000/teachers/6847e55c275f27a90c06a627 = Put = Update 
// http://localhost:5000/teachers/ = Post = Create
// http://localhost:5000/teachers/ = Get = readAll 
// http://localhost:5000/teachers/6847e55c275f27a90c06a627  = Delete = delete
// http://localhost:5000/teachers/6847e55c275f27a90c06a627 = Get = readbyId

