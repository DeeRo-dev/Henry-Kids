
const { Router } = require("express");
const {
  createUser,
  getUserId,
  deleteUser,
  editUser,
  getUser,
  getTipo,
  // solTeacher,
  // solAceptadaTeacher,
  // getSolicitudTecher

} = require("../controllers/user");


const router = Router();


router.get("/", getUser);
router.post("/", createUser);
router.get("/:id", getUserId);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.get("/typo/:id",getTipo)
// router.put("/solicitud/:id", solTeacher )
// router.put("/solicitud/aceptada/:id", solAceptadaTeacher )
// router.get("/solicitud/lista", getSolicitudTecher )
module.exports = router;
