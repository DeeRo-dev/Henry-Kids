const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('category', {
     name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    });
};