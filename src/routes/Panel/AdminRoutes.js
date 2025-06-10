const express = require("express");
const router = express.Router();
const {
  getAllAdmins,
  updateAdmin,
  getAdminById,
  createAdmin,
  deleteAdmin,
} = require("../../controllers/Panel/AdminController");

const { jwtAuthMiddleware } = require("../../middleware/jwtAuth");
const roleMiddleware = require("../../middleware/roleMiddleware");

router.use(jwtAuthMiddleware); 
router.use(roleMiddleware(["admin"]));

router.post("/", createAdmin); 
router.get("/", getAllAdmins);
router.get("/:id", getAdminById,);
router.put("/:id",updateAdmin,);
router.delete("/:id",deleteAdmin,);


module.exports = router;

     // Api Test Url /Api End Point
// http://localhost:5000/admin/6847e55c275f27a90c06a627 = Put = Update 
// http://localhost:5000/admin/ = Post = Create
// http://localhost:5000/admin/ = Get = readAll 
// http://localhost:5000/admin/6847e55c275f27a90c06a627  = Delete = delete
// http://localhost:5000/admin/6847e55c275f27a90c06a627 = Get = readbyId


