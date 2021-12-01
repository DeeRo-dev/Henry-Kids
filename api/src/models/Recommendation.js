const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');

module.exports = (sequelize) => {

  sequelize.define('recommendation', {
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
    },{
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
};