const {
  Class,
  Category,
  Recommendation,
  Comment,
  valoration,
  Evaluation
} = require("../db");
const Sequelize = require("sequelize");

async function addClass(req, res, next) {
  let data = { ...req.body };
 
  try {
    const createClass = await Class.create({
      title: data.title,
      description: data.description,
      studio_material: data.studio_material,
      valoration: data.valoration,
      video_link: data.video_link,
      game_link: data.game_link,
      state: data.state,
      difficulty: data.difficulty,
    });

    // me falta agregarle la categoty, recommendation,comment. --- por hacer ---

    // let createCategory = await Category.create({

    // })

    return res
      .json({ message: "Clase created succesfully", Class: createClass })
      .send(createClass);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

async function getClass(req, res, next) {
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
}

async function getClassEjempl(req,res,nex){
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
}


module.exports = {
  addClass,
  getClass,
  getClassEjempl
};
