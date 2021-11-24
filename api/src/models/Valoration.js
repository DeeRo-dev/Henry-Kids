const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("valoration", {
    id_valoration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    valoration: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },
  });
};
