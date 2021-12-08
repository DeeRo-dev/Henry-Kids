const {Class, User, Status, AssUserClass } = require('../db.js');
const Sequelize = require('sequelize');

async function createStatus(req, res, next){
	const statusList = [ 'in progress', 'done', 'deleted'];
	
	
		try{
     		const newStatus = await Promise.all(statusList.map(async function (item){
     		const [status, created] = await Status.findOrCreate({
      			where:{
        		name: item.toLowerCase()
        		}
       		})   
     		}));
     		const result  = await Status.findAll({
        		attributes:['name', 'id']
    		});
    		
    		const allStatus = result.map(item => item.toJSON());

    		res.send(allStatus);
    	    
	   	}catch{
		   (err => alert(err))
	   	};
}

async function createSubscriber(req, res, next){
	
	const {classId, userId, statusId} = req.body;

	
	try{	
	    const user = await User.findByPk(userId);
	    await user.addClass(classId);
	    const userClass = await AssUserClass.findOne({where: {
	    	classId,
	    	userId
	    }})
	    const usCl = userClass.toJSON();
	    const status = await Status.findByPk(statusId);
	    await status.addAssUserClass(usCl.id);

	}catch{
	    (err) => next(err); 
	}

	  
	try{
		const result = await User.findOne({
			where: {
				id: userId
				},
     			include: { model: Class },
      		});	

		const data = result.toJSON();
		const dataClass = data.classes.find( item => item.id === classId);
		const dataStatus = dataClass.assUserClass;
		const resultStatus = await Status.findByPk(dataStatus.statusId);
		const status = resultStatus.toJSON();

		const subscription = {
		 	userName: data.userName,
		 	userId: data.id,
		 	class:{
		 		title: dataClass.title,
		 		id: classId,
		 		status:{
		 			name: status.name,
		 			id: status.id	
		 		}
		 	}		 	
		}

		res.send(subscription);

	}catch{
		err => next(err);
	}	
}



module.exports = {
	createStatus,
	createSubscriber
}