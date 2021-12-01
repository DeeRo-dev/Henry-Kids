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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        max:5,
        min:1,
      }
    },
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
};
