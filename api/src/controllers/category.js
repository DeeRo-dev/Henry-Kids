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
    let name = req.query.name;
    let category;
    if (name) {
      category = await Category.findAll({
        where: {
          name: { [Op.iLike]: "%" + name + "%" }, //le dice que busque cualquier elemento que tena el name en alguna parte
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
    const newCategory = await Category.create({
      name: "JavaScrip",
      technology: "JavaScript",
      description: "programacion web ",
      img_link:
        "https://i.blogs.es/544e7d/650_1000_javascript_logo/1366_2000.png",
    });
    arr.push(newCategory);
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
          id: { id },
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
  const { name, technology, description, img_link } = req.body;
  const cat = Category.findByPk(name);
  if (!cat) {
    return res
      .status(400)
      .json({ mensage: "No existe un usuario con ese nombre" });
  } else {
    try {
      const newCategory = await Category.update({
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
}

module.exports = {
  getCat,
  getEjemplo,
  addCate,
  getCatId,
  putCat,
};
