const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {

    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },

  

    type: {
      type: DataTypes.ENUM("teacher", "student","admin"),
      defaultValue:"student",
      // allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(10000000),
    },

    solictud:{
      type:DataTypes.BOOLEAN(),
      defaultValue:false,
    }
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
};
