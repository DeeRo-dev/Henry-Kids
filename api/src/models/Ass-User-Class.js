const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('ass-user-class', {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    userId: {
      type: DataTypes.INTEGER
    }, 

    classId: {
      type: DataTypes.INTEGER
    }, 


    });
};
