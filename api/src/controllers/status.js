const {Class, User, Status } = require('../db.js');
const Sequelize = require('sequelize');

async function createStatus(req, res, next){
	const statusList = [ 'in progress', 'done', 'deleted'];
	let newStatus;
	let result;

		try{
     		newStatus = await Promise.all([statusList.map(async function (item){
     		const [status, created] = await Status.findOrCreate({
      			where:{
        		name: item.toLowerCase()
        		}
       		})   
     		})
    		 ])
	   	}catch{
		   (err => alert(err))
	   	};


	    try{
    		result  = await Status.findAll({
        		attributes:['name', 'id'],
    		})
    	}catch{
    	(err => err)
    	}

    	const allStatus = result.map(item => item.toJSON());

   
	 	res.send(allStatus);

}



module.exports = {
	createStatus
}