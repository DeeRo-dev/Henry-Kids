const{User, Class, Status} = require('../db.js');
const Sequelize = require('sequelize');

async function  filterClassesPerStatus(req, res, next){
	const {userId} = req.params;
	 
	try{ 

		let inProgress = [];
		let done = [];
		let deleted = [];
		let subscribedClass;

		const result = await User.findByPk(userId, {
     			include: { model: Class },
      		});
        const data = result.toJSON();   
           

        if(data.type === 'student' && data.classes.length){
	       
			const dataClassRegistered = await Promise.all(data.classes.map(async function(item) {
					    	
			    		
						const resultStatus = await Status.findByPk(item.assUserClass.statusId, {attributes: ['name', 'id']});
						const oneStatus = resultStatus.toJSON();
						subscribedClass = {
							title: item.title,
		 						userId: item.id
		 				}
		 				
		 				
		 				switch(oneStatus.name){
							case 'in progress':
							inProgress.push(subscribedClass);
							break;

							case 'done':
							done.push(subscribedClass);
							break;

							case 'deleted':
							deleted.push(subscribedClass);
							break;

							default: return subscribedClass;

						}
		 					 
			    }));
			 
			const statuses = {
        		inProgress,
        		done,
        		deleted
        	}
		 	
		
        if('name' in req.query){

        	switch(req.query.name.toLowerCase()){
				case 'in progress':
				res.send(inProgress);
				break;

				case 'done':
				res.send(done);
				break;

				case 'deleted':
				res.send(deleted);
				break;

				default: res.send("This status doesn't exist.");
			}
			
		}else{

			res.send(statuses);		
		}
	
	}else{

	res.send("We couldn't find any classes.")

    }	
	}catch{

		err => next(err);
	}	

}

module.exports ={
	filterClassesPerStatus
}
