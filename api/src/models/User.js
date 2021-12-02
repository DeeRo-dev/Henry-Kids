const { Sequelize, DataTypes } = require("sequelize");
// const useBcrypt = require('sequelize-bcrypt');
// require('sequelize-isunique-validator')(Sequelize);

module.exports = (sequelize) => {
  sequelize.define("user", {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
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

  

    type: {
      type: DataTypes.ENUM("teacher", "student","admin"),
      defaultValue:"student",
      // allowNull: false,
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
