const {  Class, Category, Recommendation, Comment, Evaluation} = require("../db");
const Sequelize = require('sequelize');

// funcion para poder crear clases nuevas.
async function addClass(req, res, next) {

    let data = { ...req.body};

    try {

        const createClass = await Class.create({
            title: data.title,
            description: data.description,
            studio_material: data.studio_material,
            valoration: data.valoration,
            video_link: data.video_link,
            game_link: data.game_link,
            state: data.state,
            difficulty: data.difficulty

        });
        
        // me falta agregarle la category, recommendation,comment, etc. --- por hacer ---

        let createCategory = await Category.findById(
            data.id
        )

        await createClass.setCategory(createCategory);

        return res.json({message: 'Clase created succesfully', Class: createClass});
    }

    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }


};

// funcion para poder eliminar una clase mediante el id.
async function deleteClass(req, res){
    
    try {
        const deleClass = await Class.destroy({
            where: {
                id: req.params.id
            }
        })  

        res.send("Was successfully removed");  
    }
    catch (error) {
        return res.status(400).send({error: "something went wrong :("});
    };
};



module.exports = {
    addClass,
    deleteClass,
};