const { Router } = require("express");
const { addEval, getEval,getClasEvaUs } = require("../controllers/evaluation");

const router = Router();

router.post("/", addEval);
router.get("/:idClas", getEval);
router.get("/claseEval/:idClas",getClasEvaUs)

module.exports = router;
