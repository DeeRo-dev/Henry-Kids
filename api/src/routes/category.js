const { Router } = require("express");
// const axios = require("axios"); //es una librearia que funciona como fech
const { Category } = require("../db");

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    let arr = [];
    const newCategory = await Category.create({
        name: "JavaScrip",
      technology: "JavaScript",
      description: "programacion web ",
      img_link:"https://i.blogs.es/544e7d/650_1000_javascript_logo/1366_2000.png",
      });
    arr.push(newCategory);
    res.send(arr);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, technology, description, img_link } = req.body;
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
