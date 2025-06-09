const express = require("express");
const router = express.Router();
const {
  createStudentInfo,
  getAllStudentInfo,
  getStudentInfoById,
  updateStudentInfo,
  deleteStudentInfo,
} = require("../../controllers/Student_Info/informationController");

router.post("/", createStudentInfo);              
router.get("/", getAllStudentInfo);                
router.get("/:id", getStudentInfoById);            
router.put("/:id", updateStudentInfo);             
router.delete("/:id", deleteStudentInfo);          

module.exports = router;
