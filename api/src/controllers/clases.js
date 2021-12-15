const {
  User,
  Class,
  Category,
  Recommendation,
  Comment,
  Evaluation,
} = require("../db");
const Sequelize = require("sequelize");


const { filterByCategory } = require("../filters/filterByCategory");
const { filterByDifficulty } = require("../filters/filterByDifficulty");
const { searchTitle } = require("../search/searchTitle")


// funcion para traernos todas las clases, manejamos tambien el search por titulo y los filtros.
async function getClass(req, res, next) {

  let results = [];

  results = await Class.findAll({
    attributes: ["id", "title", "description", "difficulty", "video_link", "game_link", "studio_material"],
    order:[[Evaluation, 'Promedio', 'DESC']],
    include: [{model: Category}, {model: Evaluation}, {model: User}, {model: Comment, include:[{model:User}]}],
  });



  // Aca manejamos la busqueda por el search (por title).
  // modelo ruta 
  // GET https://localhost:3001/class?title=javascript

  if (req.query.title) {
    
    results = await searchTitle(results, req.query.title)
    
  }

  // Aca manejamos los filters.
  
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

      // Valido si tengo el la dificultad en el query string del request
      if (!req.query.difficulty) {
        return res.status(400).send({ error: "difficulty is required" });
      }
     
      results = await filterByDifficulty(results, req.query.difficulty)
      break;

    case "valoration":
      break;
  }

  switch (req.query.second_filter) {

    case "category":

      // modelo ruta 
      // GET https://localhost:3001/class?filter=xxxxxxxxxxx&category_id=yyyyyyy&second_filter=category&category_id=1

      // Valido si tengo el category_id en el query string del request
      if (!req.query.category_id) {
        return res.status(400).send({ error: "category_id is required" });
      }
     
      results = await filterByCategory(results, req.query.category_id)
      break;

    case "difficulty":
      
      // modelo ruta 
      // GET http://localhost:3001/class?filter=category&category_id=1&second_filter=difficulty&difficulty=Intermedia

      // Valido si tengo el la dificultad en el query string del request
      if (!req.query.difficulty) {
        return res.status(400).send({ error: "difficulty is required" });
      }
     
      results = await filterByDifficulty(results, req.query.difficulty)
      break;
  }
  
  res.send(results);

}

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
      Promedio:0,
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

    res.send("Was successfully removed");
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
    res.send("It was successfully edited");
  } catch (err) {
    next(err);
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
       include: [{model: Category} ,{model: Evaluation}, {model: User}, {model: Comment, include:[User]}]
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
