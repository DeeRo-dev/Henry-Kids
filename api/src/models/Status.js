const { Sequelize, DataTypes } = require('sequelize');



module.exports = (sequelize) => {

  sequelize.define('status', {
     name: {
      type: DataTypes.ENUM(['favorite', 'en curso', 'concluído']),
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
