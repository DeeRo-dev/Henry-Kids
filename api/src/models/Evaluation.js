const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Evaluation",
    {
      id_evaluation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Evaluation: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      Promedio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 5,
          min: 0,
        },
      },
    },
    
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
