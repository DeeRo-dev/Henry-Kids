const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      // Reveer los allowNull ---> True ---> False
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
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
        photo: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true
        }
        },
      dni: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      cuentaBancaria: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      linkedin: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      dniImag: {
        type: DataTypes.BLOB ,
        allowNull: true,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.ENUM("teacher", "student", "admin", "confirmacion"),
        defaultValue: "student",
        // allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },

      solictud: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
