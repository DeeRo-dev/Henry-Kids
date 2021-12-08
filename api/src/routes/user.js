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
  getTeacherType,
  getStudentType
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
router.get("/type/:type", getTeacherType); // Ruta para traer usuarios tipo Teacher
router.get("/type/:type", getStudentType); // Ruta para traer usuarios tipo Student

module.exports = router;