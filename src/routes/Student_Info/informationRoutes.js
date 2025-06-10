const express = require("express");
const router = express.Router();
const {
  createStudentInfo,
  getAllStudentInfo,
  getStudentInfoById,
  updateStudentInfo,
  deleteStudentInfo,
} = require("../../controllers/Student_Info/informationController");
const { jwtAuthMiddleware } = require("../../middleware/jwtAuth");

router.use(jwtAuthMiddleware);


router.post("/", createStudentInfo);              
router.get("/", getAllStudentInfo);                
router.get("/:id", getStudentInfoById);            
router.put("/:id", updateStudentInfo);             
router.delete("/:id", deleteStudentInfo);          

module.exports = router;


//http://localhost:5000/student_Info/

  // Api Test Url /Api End Point

// http://localhost:5000/teachers/6847e55c275f27a90c06a627 = Put = Update 
// http://localhost:5000/teachers/ = Post = Create
// http://localhost:5000/teachers/ = Get = readAll 
// http://localhost:5000/teachers/6847e55c275f27a90c06a627  = Delete = delete
// http://localhost:5000/teachers/6847e55c275f27a90c06a627 = Get = readbyId

