const { Router } = require("express");
const router = Router();

const {
  addClass,
  deleteClass,
  getClass,
  getClassEjempl,
  editClass,
  GetClassId,
  addEval,
  getEval,
} = require("../controllers/clases");

router.post("/", addClass);
router.delete("/:id", deleteClass);
router.put("/:id", editClass);
router.get("/", getClass);

router.get("/all", getClassEjempl);
router.get("/:id", GetClassId);

module.exports = router;
