const{Comment, Class} = require('../db.js');
const Sequelize = require("sequelize");

async function createComment(req, res, next){
	const {name, classId} = req.body;

	try{
		const commentCreation = await Comment.create({name});
		const comment = await Comment.findOne({where: {name}});
		const commentedClass = await Class.findByPk(parseInt(id: classId));
		commentedClass.setComment(comment.id);
		res.send(comment);
	}catch{
		(err) => next(err);
	}	
}


async function getComments(req, res, next){
	let result
	try{
		const {id} = req.params;
	    const electedClass = await Class.findOne(where: {id}
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
	}catch{
		(err) =	next(err);
	}
	
}

module.exports = {
  createComment,
  getComment
}