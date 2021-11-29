const {  Class, Category, Recommendation, Comment, valoration} = require("../db");
const Sequelize = require('sequelize');


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
// Me pergunto si no seria mas interesante hacer varios try...
        ///?const categoryId = await Category.findOne({where:{name: data.category}})
        ///?const userId = await User.findOne({where:{username: data.username}})
        await createClass.setCategories(parseInt(categoryId.id));
        await createClass.setUsers(parseInt(userId.id));
        const newClass = await Class.findOne({where:
        {title: data.title}},
        {include: Category}
      );

        
        // me falta agregarle la categoty, recommendation,comment. --- por hacer ---

        // let createCategory = await Category.create({

        // })

        return res.json({message: 'Clase created succesfully', Class: createClass/*newClass*/}).send(createClass);
    }

    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }

};

module.exports = {
    addClass,
};