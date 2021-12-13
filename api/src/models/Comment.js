const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('comment', {
     name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    });
};
