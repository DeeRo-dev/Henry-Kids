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
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,

    // your other configuration here
  });
};
