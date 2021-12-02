const {Class, User } = require('../db.js');
const Sequelize = require('sequelize');

async function createStatus(req, res, next){
	const statusList = ['favorite', 'in progress', 'done', 'deleted'];
	let newStatus;

		// try{
  //    		newStatus = await Promise.all([statusList.map(async function (item){
  //    		const [status, created] = await Status.findOrCreate({
  //     			where:{
  //       		name: item.toLowerCase()
  //       		}
  //      		})   
  //    		})
  //   		 ])
	 //   	}catch{
		//    (err => alert(err))
	 //   	};

	 //    try{
  //   		newStatus = await Status.findAll({
  //       		attributes:['name', 'id'],
  //   		})
  //   	}catch{
  //   	(err => err)
  //   	}

   	
   		// return newStatus.map(item => item.toJSON()); 
   		
   
		console.log(newStatus);
	 	res.send(123);

}

module.exports = {
	createStatus
}