const { Router } = require("express");
// const axios = require("axios"); //es una librearia que funciona como fech
const { Category } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
    res.send("soy un get")
});

router.post("/", async (req, res, next) => {
    try {
        const { name,technology,description,img_link  } =
          req.body;
        const newCategory = await Category.create({
          name,
          technology,
          description,
          img_link,
        });
        res.status(200).send(newCategory);
      } catch (error) {
        next(error);
      }
});


router.put("/", (req, res, next) => {
  res.send("soy un put");
});

router.delete("/", (req, res, next) => {
  res.send("soy un delet");
});
module.exports = router;
