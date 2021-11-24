const { Router } = require("express");
const { Class, Evaluation } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  if (req.query.title) {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
      },
      include: { model: Evaluation },
    }).then((Class) => {
      if (Class.length === 0) {
        return res.send("Not class found");
      }
      res.send(Class);
    });
  } else {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      include: { model: Evaluation },
    }).then((Class) => {
      res.send(Class);
    });
  }
});

router.get("/all", async (req, res, next) => {

  try {
    let arr = [];
    const newCalss = await Class.create({
      title:"CursoEjemplo",
      description:"Battle tested, Open Sourced reusable modules for Salesforce",
      strudio_material:"https://www.datasert.com/products/libshare/",
      video_link:"https://www.youtube.com/watch?v=y9HQ5txZ410&ab_channel=YOSContenidos",
      game_link:"https://scratch.mit.edu/projects/56791332",
      state:true,
      difficulty:"Basica",
      date:new Date(),

      });
    arr.push(newCalss);
    res.send(arr);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
