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


// router.post('/', verifyJWT, authorizeRoles('admin'), teacherController.createTeacher);
// router.get('/', verifyJWT, authorizeRoles('admin'), teacherController.getAllTeachers);
// router.get('/:id', verifyJWT, authorizeRoles('admin'), teacherController.getTeacherById);
// router.put('/:id', verifyJWT, authorizeRoles('admin'), teacherController.updateTeacher);
// router.delete('/:id', verifyJWT, authorizeRoles('admin'), teacherController.deleteTeacher);
// router.get('/me/profile', verifyJWT, authorizeRoles('teacher'), teacherController.getOwnProfile);