const { User, Class } = require("../db.js");
const { Association } = require("sequelize/dist");

// funcion para crear Usuario.
async function createUser(req, res, next) {
  const { firstName, lastName, userName, type, id, email } = req.body;
  try {
    const user = await User.create({
      id,
      firstName,
      lastName,
      userName,
      type,

      email,
    });
    const newUser = await User.findOne({ where: { userName } });
    res.status(200).send(newUser);
  } catch {
    (err) => err(next);
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
      include: [Class],
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

    res.send("Was successfully removed");
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

    res.send("Was successfully edited");
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  if (req.query.title) {
    return User.findAll({
      attributes: ["id", "firstName", "lastName", "userName", "type"],
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
      attributes: ["id", "firstName", "lastName", "userName", "type"],
    }).then((User) => {
      res.send(User);
    });
  }
}

async function getAllTeacher(req, res, next) {
  try {
    const userDetail = await User.findAll();
    res.send(userDetail);
  } catch (error) {
    next(error);
  }
}

async function getType(req, res, next) {
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

async function solTeacher(req, res, next) {
  const { dni, linkedin, cuentaBancaria, dniImag, pais, region, fecha } =
    req.body;
  const changes = {
    solictud: true,
    dni: dni,
    linkedin: linkedin,
    cuentaBancaria: cuentaBancaria,
    dniImag: dniImag,
    pais: pais,
    region: region,
    fecha: fecha,
  };
  try {
    const result = await User.update(changes, {
      where: {
        id: req.params.id,
      },
    });

    console.log(result);
    res.send("el Usario esta en la lista de espera de Profesores  ");
  } catch (err) {
    next(err);
  }
}

async function solAceptadaTeacher(req, res, next) {
  const changes = {
    type: "teacher",
    solictud: null,
  };
  try {
    const result = await User.update(changes, {
      where: {
        id: req.params.id,
      },
    });
    console.log(result);
    res.send("el Usario esta en la lista Profesores");
  } catch (err) {
    next(err);
  }
}

async function solRechazadaTeacher(req, res, next) {
  const changes = {
    type: "student",
    solictud: null,
  };
  try {
    const result = await User.update(changes, {
      where: {
        id: req.params.id,
      },
    });
    console.log(result);
    res.send("el Usario esta en la lista student");
  } catch (err) {
    next(err);
  }
}

async function getSolicitudTecher(req, res, next) {
  try {
    const userDetail = await User.findAll({
      where: {
        solictud: true,
      },
    });
    res.send(userDetail);
  } catch (error) {
    next(error);
  }
}

async function getUserType(req, res, next) {
  try {
    const type = req.params.type;
    let userType;
    if (type) {
      userType = await User.findAll({
        where: {
          type: type,
        },
      });
    }
    res.status(200).send(userType);
  } catch (error) {
    res.status(404);
    next(error);
  }
}

module.exports = {
  createUser,
  getUserId,
  getUser,
  editUser,
  deleteUser,
  getType,
  solTeacher,
  solAceptadaTeacher,
  getSolicitudTecher,
  getUserType,
  solRechazadaTeacher,
  getAllTeacher
};
