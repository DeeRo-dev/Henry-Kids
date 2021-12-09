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
  getUserType,
  solRechazadaTeacher,
  getAllTeacher
} = require("../controllers/user");

const router = Router();

router.get("/", getUser);
router.get("/teacher/all", getAllTeacher);
router.post("/", createUser);
router.get("/:id", getUserId);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.get("/typo/:id", getType);
router.put("/solicitud/:id", solTeacher);
router.put("/solicitud/aceptada/:id", solAceptadaTeacher);
router.put("/solicitud/rechazada/:id", solRechazadaTeacher);
router.get("/solicitud/lista", getSolicitudTecher);
router.get("/type/:type", getUserType); // Trae todos los tipos usuarios



module.exports = router;