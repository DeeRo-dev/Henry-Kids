const {
  User,
  Class,
  Category,
  Recommendation,
  Comment,
  Evaluation,
} = require("../db");
const Sequelize = require("sequelize");

const { filterByCategory} = require("../filters/filterByCategory");
const { filterByDifficulty} = require("../filters/filterByDifficulty")


// funcion para traernos todas las clases, manejamos tambien el search por titulo y los filtros.
async function getClass(req, res, next) {

  // modelo ruta para filtro por Category
  // GET https://localhost:3001/class?filter=category&category_id=1

  let results = []
  // Aca manejamos la busqueda por el search (por title).
  if (req.query.title) {
    results = await Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
      },
      include: [ Category, Evaluation, User, Comment],
    })
    
  }
  else {

    results = await Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      include: [ Category, Evaluation, User, Comment ],
    })
    
  }


  // Aca van los filters.
  
  switch (req.query.filter) {
    case "category":

      // modelo ruta 
      // GET https://localhost:3001/class?filter=category&category_id=1

      // Valido si tengo el category_id en el query string del request
      if (!req.query.category_id) {
        return res.status(400).send({ error: "category_id is required" });
      }
     
      results = await filterByCategory(results, req.query.category_id)
      break;

    case "difficulty":
      
      // modelo ruta 
      // GET https://localhost:3001/class?filter=difficulty&difficulty=Basica

      // Valido si tengo el category_id en el query string del request
      if (!req.query.difficulty) {
        return res.status(400).send({ error: "difficulty is required" });
      }
     
      results = await filterByDifficulty(results, req.query.difficulty)
      break;

    case "valoration":
      break;
  }
  
  res.send(results);

}



/* // funcion para traernos 1 clase.
async function getClass(req, res, next) {

  // if (req.query.name) {
  //   const { name } = req.query;
  //   res.send(
  //     await Class.findAll({
  //       where: {
  //         title: { [Op.iLike]: `${name}%` },
  //       }
  //     })
  //   );
  // }
  
  if (req.query.title) {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
      },
      include: [Category, Evaluation, User],
    }).then((Class) => {
      if (Class.length === 0) {
        return res.send("Not class found");
      }
      res.send(Class);
    });
  } else {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      include: [Category, Evaluation, User],
    }).then((Class) => {
      res.send(Class);
    });
  }
} */
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
    if (data.catId) {
      createClass.addCategory(data.catId);
    }
    if (data.usId) {
      createClass.addUser(data.usId, { as: "teacher" });
    }
    await Evaluation.create({
      Evaluation: 1, 
      classId: createClass.id,
    });
    res.status(200).send(createClass);
  } catch (error) {
    res.status(500).send(error);
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

    res.send("It was successfully removed.");
  } catch (error) {
    return res.status(400).send({ error: "Something went wrong :(" });
  }
}

// funcion para poder editar una clase.
async function editClass(req, res, next) {
  const changes = req.body;
  try {
    const result = await Class.update(changes, {
      where: { id: req.params.id },
    });
    res.send("Was successfully edited");
  } catch (err) {
    next(err);
  }
}


// funcion para traernos 1 clase.
async function getClass(req, res, next) {
  if (req.query.name) {
    const { name } = req.query;
    res.send(
      await Class.findAll({
        where: {
          title: { [Op.iLike]: `${name}%` },
        },
      })
    );
  }
  if (req.query.title) {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
      },
      include: [Category, Evaluation, User, Comment],
    }).then((Class) => {
      if (Class.length === 0) {
        return res.send("Not class found");
      }
      res.send(Class);
    });
  } else {
    return Class.findAll({
      attributes: ["id", "title", "description", "difficulty"],
      include: [Category, Evaluation, User, Comment],
    }).then((Class) => {
      res.send(Class);
    });
  }
}


// funcion pàra crear y traernos 1 clase (ejemplo).
async function getClassEjempl(req, res, next) {
  try {
    let arr = [];
    const newCalss = await Class.create({
      title: "CursoEjemplo",
      description:
        "Battle tested, Open Sourced reusable modules for Salesforce",
      strudio_material: "https://www.datasert.com/products/libshare/",
      video_link:
        "https://www.youtube.com/watch?v=y9HQ5txZ410&ab_channel=YOSContenidos",
      game_link: "https://scratch.mit.edu/projects/56791332",
      state: true,
      difficulty: "Basica",
    });
    arr.push(newCalss);
    res.send(arr);
  } catch (error) {
    console.log(error);
  }
}

// funcion para traernos 1 clase por id.
async function GetClassId(req, res, next) {
  try {
    const { id } = req.params;
    const classDetail = await Class.findAll({
      where: {
        id: id,
      },
      include: { model: User, Category, Evaluation, Comment },
    });
    res.send(classDetail);
  } catch (error) {
    next(error);
  }
}

async function addEval(req, res, next) {
  let data = { ...req.body };
  try {
    const Eva = await Evaluation.findAll({
      where: {
        classId: data.classId,
      },
    });
    const aux = parseInt(Eva[0].dataValues.Evaluation);
    const aux2 = parseInt(Eva[0].dataValues.id_evaluation) + 1;
    const prom = Math.round((aux + data.nota) / aux2);
    // console.log(aux, data.eva, aux2, prom);
    const change = {
      Evaluation: prom,
      userId: data.userId,
    };
    const result = await Evaluation.update(change, {
      where: { classId: data.classId },
    });

    res.status(200).send({ msj: "se cargo la nota" });
  } catch (error) {
    next(error);
  }
}

async function getEval(req, res, next) {
  try {
    const { idClas } = req.params;
    const classDetail = await Class.findAll({
      where: {
        id: idClas,
      },
      include: [Evaluation],
    });
    console.log(classDetail);
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
