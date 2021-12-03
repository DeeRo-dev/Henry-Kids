const {  Class,   Comment} = require("../db");
const Sequelize = require("sequelize");

async function createComment(req, res, next){
  const {name, classId} = req.body;
  try{
    const comment = await Comment.create({name});
    await comment.setClass(parseInt(classId));
    const verifiedComment = await Comment.findOne({where:{name}});
    
    res.send(verifiedComment);
      }catch{
      err => next(err);
      }
}


async function getComments(req, res, next){
  //Id de la clase...
  let result
  try{
    const {id} = req.body;
      const electedClass = await Class.findOne({where: {id}}
       );
      if(!electedClass.comments.length){
        result = 'Esta clase no ha sido comentada todavía.'
    }else{
      result = electedClass.comments.map(item => {
      return {
      id: item.id,
      name: item.name}
    })
    res.send(result);
    }
  } catch {
    (err) => next(err);
  }

}

module.exports ={
  createComment,
  getComments  
}


