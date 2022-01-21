const { User, Class, Status } = require("../db.js");
const { sendMail } = require("../mails/mails");
const fs = require("fs");
// fs es una libreria, sistema de archivo, para interactuar con los archivos y directorios. (en este caso usamos ---> readFileSync())

// funcion para crear Usuario, tambien mediante sendMail enviamos un correo de bienvenida.
async function createUser(req, res, next) {
  const { firstName, lastName, userName, type, id, email, photo } = req.body;
  
  try {
    const user = await User.create({
      id,
      firstName,
      lastName,
      userName,
      type: "confirmacion",
      email,
      photo,
    });

    // aca le ponemos mayuscula a la primer letra del nombre.
    let newFirstName =
      user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);

    // aca leemos el archivo html. y con el replace le decimos que cambie FIRST_NAME que se encuentra en el archivo, por el nosbre que se pasa por body firstName. (de esta forma hacemos el mail mas personal)
    let html_template = fs.readFileSync("./src/mails/templates/confirmacion.html", {
      encoding: "utf8",
      flag: "r",
    });
    html_template = html_template.replace("FIRST_NAME", newFirstName);

    
    let rute =`<a href="http://localhost:3000/Verificacion/${user.userName}">Link</a>`
    
    html_template = html_template.replace("RUTA_CONF", rute);

    //aca le pasamos a la funcion, el email del usuario, el asunto, el template, y si es html o text.
    sendMail(user.email, "Confirma tu dirección de correo electrónico", html_template, "html");

    res.status(200).send(user);
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
      include: [{ model: Class }],
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

// Función para editar un Usuario mediante el id.
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

// Función para traernos todos los users.
async function getUser(req, res, next) {
  if (req.query.title) {
    return User.findAll({
      attributes: ["id", "firstName", "lastName", "userName", "type", "photo"],
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
      attributes: ["id", "firstName", "lastName", "userName", "type", "photo"],
    }).then((User) => {
      res.send(User);
    });
  }
}

async function getAllTeacher(req, res, next) {
  try {
    const userDetail = await User.findAll({
      where: {
        type: "teacher",
      },
    });
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
    dniImag: dniImag[0],
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

    const foundUser = await User.findByPk(req.params.id);
    const user = foundUser.toJSON();
    // Acá le ponemos mayúscula a la primer letra del nombre.
    let newFirstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
    // Acá leemos el archivo html y con el replace le decimos que cambie FIRST_NAME que se encuentra en el archivo, por el nosbre que se pasa por body firstName. (de esta forma hacemos el mail mas personal)
    let html_template = fs.readFileSync('./src/mails/templates/inProcess.html', {encoding:'utf8', flag:'r'})
    html_template = html_template.replace('FIRST_NAME', newFirstName)
    //aca le pasamos a la funcion, el email del usuario, el asunto, el template, y si es html o text.
    sendMail(user.email, "Solicitud en proceso...", html_template, "html");

    console.log(result);

    res.send("el Usario esta en la lista de espera de Profesores  ");

  } catch (err) {
    next(err);
  }
}

async function BorarFavoritos(id) {
  const relode = await User.findAll({
    where: {
      id: id,
    },
    include: [{ model: Class }],
  });
  const user = await User.findByPk(id);
  const userr = relode[0].toJSON().classes;
  console.log(relode[0].toJSON().classes);
  userr.map((x) => {
    console.log(x.id);
    user.removeClass(x.id);
  });
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
   


    const foundUser = await User.findByPk(req.params.id);
    const user = foundUser.toJSON();
    let newFirstName =
      user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    let html_template = fs.readFileSync(
      "./src/mails/templates/approvedRequest.html",
      { encoding: "utf8", flag: "r" }
    );
    html_template = html_template.replace("FIRST_NAME", newFirstName);
    sendMail(
      user.email,
      "Su solicitud ha sido aprobada...",
      html_template,
      "html"
    );
    BorarFavoritos(req.params.id);
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

    const foundUser = await User.findByPk(req.params.id);
    const user = foundUser.toJSON();
    let newFirstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
    let html_template = fs.readFileSync('./src/mails/templates/rejectedRequest.html', {encoding:'utf8', flag:'r'})
    html_template = html_template.replace('FIRST_NAME', newFirstName)
    sendMail(user.email, "Muchas gracias por tu interés...", html_template, "html");


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

async function confirmacionEmail(req, res, next) {
  const changes = {
    type: "student",
  };
  try {
    const result = await User.update(changes, {
      where: {
        userName: req.params.id,
      },
    });
    const userDetail = await User.findAll({
      where: {
        userName: req.params.id,
      },
    });
    console.log(userDetail.toJSON());
    let email = userDetail.toJSON().email;
    let user = userDetail.toJSON();

    let newFirstName =
      user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    let html_template = fs.readFileSync("./src/mails/templates/welcome.html", {
      encoding: "utf8",
      flag: "r",
    });
    html_template = html_template.replace("FIRST_NAME", newFirstName);

    sendMail(
      email,
      "Welcome to Henry Kids",
      html_template,
      "html"
    );

    res.send("el Usario ahora es estudiante");
  } catch (err) {
    next(err);
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
  getAllTeacher,
  confirmacionEmail,
};

