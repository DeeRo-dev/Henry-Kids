const { Router } = require("express");
const { getCat , getEjemplo, addCate , getCatId , putCat,getName} = require('../controllers/category');




const router = Router();

router.get('/',getCat);

router.get("/name", getName)

router.get("/all", getEjemplo)

router.post("/",addCate)

router.get("/:id", getCatId)

router.put("/", putCat)

router.delete("/", (req, res, next) => {
  res.send("soy un delet");
});

module.exports = router;

