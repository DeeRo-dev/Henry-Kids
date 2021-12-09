const{User, Class, Status} = require('../db.js');
const Sequelize = require('sequelize');

async function  filterStudentsPerStatus(req, res, next){
	const {classId} = req.params;
	
	let inProgress = [];
	let done =  [];
	let deleted = [];
	let subscribedStudent;
	
	try{
		const result = await Class.findByPk(classId, {
     			include: { model: User },
      		});
		const data = result.toJSON();

		

		const dataUsersRegistered = await Promise.all(data.users.map( async function(item) {
		
			if(item.type === 'student' &&  item.assUserClass.statusId){

				const dataStatus = item.assUserClass;
				const resultStatus = await Status.findByPk(dataStatus.statusId,
					{attributes: ['name', 'id']});
				const oneStatus = resultStatus.toJSON();

				subscribedStudent = {
					name: item.name,
					lastName: item.lastName,
		 			userName: item.userName,
		 			userId: item.id,
		 		}


				switch(oneStatus.name){
					case 'in progress':
					inProgress.push(subscribedStudent);
					break;

					case 'done':
					done.push(subscribedStudent);
					break;

					case 'deleted':
					deleted.push(subscribedStudent);
					break;

					default: return subscribedStudent;

				};
			}else{

				res.send("We couldn't find any users.")
			}

		} ));
	
		
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

				default: res.send("This status doesn't exist.")
			}

		
		}else{

			res.send(statuses);
			
		}
	}catch{

		err => next(err);
	}	


}

module.exports = {
	filterStudentsPerStatus
}