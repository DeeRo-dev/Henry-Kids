const {
  Evaluation,
  Class
} = require("../db");
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

      console.log(Eva)

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
        include: [Evaluation, User],
        });
        console.log(classDetail);
        res.send(classDetail);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addEval,
    getEval
}