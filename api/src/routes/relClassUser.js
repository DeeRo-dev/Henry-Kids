const { Router } = require("express");
const {
  relClassUser,
  getAlu,
  getProf,
  delFav,
} = require("../controllers/relClassUser");

const router = Router();

router.post("/fav/:idUs/:idClas", relClassUser);
router.get("/fav/:idUs", getAlu);
router.get("/cursos/:idUs", getProf);
router.delete("/fav/:idUs/:idClas", delFav);

module.exports = router;
