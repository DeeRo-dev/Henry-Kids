const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('assUserClass', {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    userId: {
      type: DataTypes.STRING
    }, 

    classId: {
      type: DataTypes.INTEGER
    }, 


    });
};
