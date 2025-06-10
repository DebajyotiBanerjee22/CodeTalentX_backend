const express = require("express");
const router = express.Router();
const {createStudent,getAllStudents,updateStudent,deleteStudent,getStudentById,getOwnProfile} = require("../../controllers/Panel/studentController");
const roleMiddleware = require("../../middleware/roleMiddleware");
const { jwtAuthMiddleware } = require("../../middleware/jwtAuth");

router.use(jwtAuthMiddleware);
router.post("/", roleMiddleware(["teacher", "admin"]),createStudent);
router.get("/",getAllStudents);
router.put("/:id", roleMiddleware(["teacher", "admin","student"]),updateStudent);
router.delete("/:id",roleMiddleware(["teacher", "admin","student"]),deleteStudent);
router.get('/:id',roleMiddleware(['admin', 'teacher']),getStudentById);
router.get('/me/profile',roleMiddleware('student'),getOwnProfile);


module.exports = router;

      // Api Test Url /Api End Point

// http://localhost:5000/students/6847e55c275f27a90c06a627 = Put = Update 
// http://localhost:5000/students/ = Post = Create
// http://localhost:5000/students/ = Get = readAll 
// http://localhost:5000/students/6847e55c275f27a90c06a627  = Delete = delete
// http://localhost:5000/students/6847e55c275f27a90c06a627 = Get = readbyId







// router.post('/', verifyJWT, authorizeRoles('admin', 'teacher'), studentController.createStudent);
// router.get('/', verifyJWT, authorizeRoles('admin', 'teacher'), studentController.getAllStudents);
// router.get('/:id', verifyJWT, authorizeRoles('admin', 'teacher'), studentController.getStudentById);
// router.put('/:id', verifyJWT, authorizeRoles('admin', 'teacher'), studentController.updateStudent);
// router.delete('/:id', verifyJWT, authorizeRoles('admin'), studentController.deleteStudent);
// router.get('/me/profile', verifyJWT, authorizeRoles('student'), studentController.getOwnProfile);