const { Router } = require("express");
const { addEval, getEval } = require("../controllers/evaluation");

const router = Router();

router.post("/", addEval);
router.get("/:idClas", getEval);

module.exports = router;
