const { Sequelize, DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('status', {
     name: {
      type: DataTypes.ENUM([ 'in progress', 'done', 'deleted']),
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      isUnique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    });
};
