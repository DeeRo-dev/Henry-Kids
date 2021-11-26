const {
  Class,
  Category,
  Recommendation,
  Comment,
  Evaluation,
} = require("../db");
const Sequelize = require("sequelize");

// funcion para poder crear clases nuevas.
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

    // me falta agregarle la category, recommendation,comment, etc. --- por hacer ---

    // let createCategory = await Category.findById(
    //     data.id
    // )

    // await createClass.setCategory(createCategory);

    return res.json({
      message: "Clase created succesfully",
      Class: createClass,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

// funcion para poder eliminar una clase mediante el id.
async function deleteClass(req, res) {
  try {
    const deleClass = await Class.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("Was successfully removed");
  } catch (error) {
    return res.status(400).send({ error: "something went wrong :(" });
  }
}

async function editClass(req, res, next) {
  const changes = req.body;
  try {
    const result = await Class.update(changes, { where: { id: req.params.id, } });
    res.send("Was successfully edited");
  } catch (err) {
    next(err);
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

async function getClassEjempl(req, res, next) {
    try {
        let arr = [];
        const newCalss = await Class.create({
          title:"CursoEjemplo",
          description:"Battle tested, Open Sourced reusable modules for Salesforce",
          strudio_material:"https://www.datasert.com/products/libshare/",
          video_link:"https://www.youtube.com/watch?v=y9HQ5txZ410&ab_channel=YOSContenidos",
          game_link:"https://scratch.mit.edu/projects/56791332",
          state:true,
          difficulty:"Basica"        
    
          });
        arr.push(newCalss);
        res.send(arr);
      } catch (error) {
        console.log(error);
      }
}



async function GetClassId(req, res, next) {
    try {
        const { id } = req.params;
        const classDetail = await Class.findAll({
          where: {
            id: id,
          },
          include: { model: Category, Evaluation },
        });
        res.send(classDetail);
      } catch (error) {
        next(error);
      }
}


module.exports = {
  addClass,
  deleteClass,
  editClass,
  getClass,
  getClassEjempl,
  GetClassId
};
