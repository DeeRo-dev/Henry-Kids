const { Sequelize, DataTypes } = require("sequelize");
// const useBcrypt = require('sequelize-bcrypt');
// require('sequelize-isunique-validator')(Sequelize);

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
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

      id: {
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: true,
      },

      type: {
        type: DataTypes.ENUM("teacher", "student"),
        allowNull: true,
      },

      photo: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      }
    },
  );
};
