const { Evaluation, Class, User } = require("../db");
const Sequelize = require("sequelize");

// ejemplos de rutas
// /evaluation
// /evaluation/:id

async function addEval(req, res, next) {
  let data = { ...req.body };
  try {
    const Eva = await Evaluation.findAll({
      where: {
        classId: data.classId,
      },
    });
    if (data.nota <= 5 && data.nota >= 1) {
      let aux = Eva[0].dataValues.Evaluation;
      let arr = [];
      let arr2 = arr.concat(aux);
      arr2.push(data.nota);
      const suma = arr2.reduce((a, b) => a + b, 0);
      const length = parseInt(arr2.length) - 1;
      const prom = Math.round(suma / length);
      const change = {
        Evaluation: arr2,
        Promedio: prom,
        userId: data.userId,
      };
      const result = await Evaluation.update(change, {
        where: { classId: data.classId },
      });
      res.status(200).send({ msj: "La valorizacion de la clase es " + prom });
    } else {
      res
        .status(300)
        .send({
          msj:
            "el valor " +
            data.nota +
            " esta fuera del rango tiene que ser del 1 al 5 ",
        });
    }
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
    // const suma=classDetail[0].dataValues.Evaluations[0].dataValues.Evaluation.reduce((a, b) => a + b, 0);
    // const length = parseInt(classDetail[0].dataValues.Evaluations[0].dataValues.Evaluation.length)-1;
    const prom = classDetail[0].dataValues.Evaluations[0].dataValues.Promedio
    res.send({promedio: prom});
  } catch (error) {
    next(error);
  }
}

async function getClasEvaUs(req, res, next) {
  try {
    const { idClas } = req.params;
    const classDetail = await Class.findAll({
      where: {
        id: idClas,
      },
      include: [{ model:Evaluation, include: User}],
    });
    res.send(classDetail);
  } catch (error) {
    next(error);
  }
}



module.exports = {
  addEval,
  getEval,
  getClasEvaUs
};
