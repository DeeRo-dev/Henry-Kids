const {
    Class,
    Category,
    Recommendation,
    Comment,
    Evaluation,
  } = require("../db");
  const Sequelize = require("sequelize");

  async function createSubscriber(req, res, next){

    // res.send({ mensage: "No existe un usuario con ese nombre" })

    try{
        const chosenClass = await findById(parseInt(req.params.idClas));
        console.log(chosenClass)
        const user = await findById(parseInt(req.params.idUs));
        console.log(user)
        chosenClass.addUser(user, {as: 'student'});
        console.log(chosenClass)
        res.send(chosenClass);
    }catch{
        (err) => next(err); 
    }
}

  module.exports = {
    
    createSubscriber
};