const { Router } = require("express");
const {
  createUser,
  getUserId,
  deleteUser,
  editUser,
  getUser,
  getType,
  solTeacher,
  solAceptadaTeacher,
  getSolicitudTecher,
  getUserType
} = require("../controllers/user");

const router = Router();

router.get("/", getUser);
router.post("/", createUser);
router.get("/:id", getUserId);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.get("/typo/:id", getType);
router.put("/solicitud/:id", solTeacher);
router.put("/solicitud/aceptada/:id", solAceptadaTeacher);
router.get("/solicitud/lista", getSolicitudTecher);
router.post("/type/user/:type", getUserType); // Trae todos los tipos usuarios

module.exports = router;