const { User, Class, Status} = require("../db.js");

// funcion para crear Usuario.
async function createUser(req, res, next) {
  const { firstName, lastName, userName, type, photo, id } =
    req.body;

  try {
    const user = await User.create({
      id,
      firstName,
      lastName,
      userName,
      type,
      photo,
    });

    const newUser = await User.findOne({ where: { userName } });
    res.status(200).send(newUser);
  } catch (err) {
    next(err);
  }
}

// funcion para traernos 1 Usuario por id.
async function getUserId(req, res, next) {
  try {
    const { id } = req.params;
    const userDetail = await User.findAll({
      where: {
        id: id,
      },
      include: [{model: Class}],
    });
    res.send(userDetail);
  } catch (error) {
    next(error);
  }
}

// funcion para poder eliminar un Usuario mediante el id.
async function deleteUser(req, res, next) {
  try {
    const deleUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.send("It was successfully removed");
  } catch (err) {
    next(err);
  }
}

// funcion para editar un Usuario mediante el id.
async function editUser(req, res, next) {
  const changes = req.body;
  try {
    const result = await User.update(changes, {
      where: {
        id: req.params.id,
      },
    });

    res.send("It was successfully edited");
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  if (req.query.title) {
    return User.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "userName",
        "type",
        "photo",
      ],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
        include: { model: Class },
      },
    }).then((User) => {
      if (User.length === 0) {
        return res.send("Not class found");
      }
      res.send(User);
    });
  } else {
    return User.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "userName",
        "type",
        "photo",
      ],
    }).then((User) => {
      res.send(User);
    });
  }
}

async function getTipo(req, res, next) {
  try {
    const { id } = req.params;
    const userDetail = await User.findAll({
      where: {
        id: id,
      },
    });
    const aux = userDetail[0].dataValues.type;
    res.send(aux);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  getUserId,
  getUser,
  editUser,
  deleteUser,
  getTipo,
};
