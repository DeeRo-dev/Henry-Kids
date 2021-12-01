const { Sequelize, DataTypes } = require("sequelize");
// const useBcrypt = require('sequelize-bcrypt');
// require('sequelize-isunique-validator')(Sequelize);

module.exports = (sequelize) => {
  sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    type: {
      type: DataTypes.ENUM("teacher", "student"),
      allowNull: false,
    },

    photo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "No es una dirección de correo electrónico.",
        },
        // isUnique: sequelize.validateIsUnique('email',
        // 'Esta dirección de correo electrónico ya existe.')
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/i,
      },
    },
  });
};
