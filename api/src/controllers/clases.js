const {  Clase, Category, Recommendation, Comment } = require("../db");
const Sequelize = require('sequelize');


async function addClase(req, res) {

    let data = { ...req.body};

    try {

        const createClase = await Clase.create({
            title: data.title,
            description: data.description,
            studio_material: data.studio_material,
            valoration: data.valoration,
            video_link: data.video_link,
            game_link: data.game_link,
            state: data.state,
            difficulty: data.difficulty,
            date: data.date,

        });
        
        // me falta agregarle la categoty, recommendation,comment. --- por hacer ---

        let createCategory = await Category.create({

        })

        return res.json({message: 'Clase created succesfully', Clase: createdClase});
    }

    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }

};