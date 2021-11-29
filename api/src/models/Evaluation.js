const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Evaluation", {
    id_evaluation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Evaluation: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },
  });
};
