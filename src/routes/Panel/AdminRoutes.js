// const express = require("express");
// const router = express.Router();
// const {
//   getAllUsers,
//   changeUserRole,
//   deleteUser,
//   createAdmin
// } = require("../controllers/AdminController");

// const { jwtAuthMiddleware } = require("../middleware/jwtAuth");
// const roleMiddleware = require("../middleware/roleMiddleware");

// router.use(jwtAuthMiddleware); 
// router.use(roleMiddleware(["admin"]));

// router.post("/", createAdmin); 
// router.get("/", getAllUsers);
// router.put("/:id", changeUserRole);
// router.delete("/:id", deleteUser);

// module.exports = router;


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


// router.post('/', verifyJWT, authorizeRoles('superadmin'), adminController.createAdmin);
// router.get('/', verifyJWT, authorizeRoles('superadmin'), adminController.getAllAdmins);
// router.get('/:id', verifyJWT, authorizeRoles('superadmin'), adminController.getAdminById);
// router.put('/:id', verifyJWT, authorizeRoles('superadmin'), adminController.updateAdmin);
// router.delete('/:id', verifyJWT, authorizeRoles('superadmin'), adminController.deleteAdmin);
// router.get('/me/profile', verifyJWT, authorizeRoles('admin', 'superadmin'), adminController.getOwnProfile);