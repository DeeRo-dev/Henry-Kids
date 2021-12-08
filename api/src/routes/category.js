const { Router } = require("express");
const { getCat , getEjemplo, addCate , getCatId , putCat, getName, deleteCategory} = require('../controllers/category');




const router = Router();

router.get('/',getCat);

router.get("/name", getName)

router.get("/all", getEjemplo)

router.post("/",addCate)

router.get("/:id", getCatId)

router.put("/:id", putCat)

router.delete("/:id", deleteCategory)

module.exports = router;

