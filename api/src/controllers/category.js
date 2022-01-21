const {
  Class,
  Category,
  Recommendation,
  Comment,
  valoration,
} = require("../db");
const Sequelize = require("sequelize");

async function getCat(req, res, next) {
  try {
    let name1 = req.query.name;
    let category;
    if (name1) {
      category = await Category.findAll({
        where: {
          name: name1, //le dice que busque cualquier elemento que tena el name en alguna parte
        },
      });
    } else {
      category = await Category.findAll({});
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(400).send(category);
  }
}

async function getEjemplo(req, res, next) {
  try {
    let arr = [];
    const newCategory1 = await Category.create({
      name: "JavaScript",
      technology: "JavaScript",
      description: "programacion web ",
      img_link:
        "https://i.blogs.es/544e7d/650_1000_javascript_logo/1366_2000.png",
    });
    arr.push(newCategory1);
    const newCategory2 = await Category.create({
      name: "React",
      technology: "React",
      description:
        "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. ",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    });
    arr.push(newCategory2);
    const newCategory3 = await Category.create({
      name: "HTML",
      technology: "HTML",
      description:
        "HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web",
      img_link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
    });
    arr.push(newCategory3);
    res.send(arr);
  } catch (error) {
    console.log(error);
  }
}

async function addCate(req, res, next) {
  const { name, technology, description, img_link } = req.body;
  if (!name) {
    return res.status(400).json({ mensage: "falta nombre" });
  }
  try {
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
}

async function getCatId(req, res, next) {
  try {
    const id = req.params.id;
    let cat;
    if (id) {
      // cat = await Category.findById(id);
      cat = await Category.findAll({
        where: {
          id: id,
        },
      });
    }
    res.status(200).send(cat);
  } catch (error) {
    res.status(404);
    next(error);
  }
}

async function putCat(req, res, next) {
  const changes = req.body;
  try {
    const result = await Category.update(changes, {
      where: {
        id: req.params.id,
      },
    });
    res.send("Category was successfully edited");
  } catch (err) {
    next(err);
  }
};

async function getName(req, res, next) {
  const arr = [];
  const category = await Category.findAll();
  console.log(category[0].dataValues.name);
  category.map((a)=>{
    arr.push(a.dataValues.name)
  })
  res.status(200).send(arr);
}

async function deleteCategory(req, res, next) {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("Was successfully removed");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getCat,
  getEjemplo,
  addCate,
  getCatId,
  putCat,
  getName,
  deleteCategory
};
