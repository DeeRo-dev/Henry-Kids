const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');

module.exports = (sequelize) => {

  sequelize.define('comments', {
     name: {
      type: DataTypes.TEXT,
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
