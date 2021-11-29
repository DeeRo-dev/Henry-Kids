const { Router } = require("express");
const { relClassUser,
    getAlu,
    getProf } = require("../controllers/relClassUser");

const router = Router();

router.post("/fav/:idUs/:idClas", relClassUser);
router.get("/fav/:idUs", getAlu);
router.get("/cursos/:idUs", getProf);

module.exports = router;
