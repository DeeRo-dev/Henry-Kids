const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "category",
    {
      // id: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   primaryKey: true,
      //   defaultValue: DataTypes.UUIDV4, //me genera automaticamente un UUIDV4(para configurar bien el id)
      // },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
        unique: true,
      },
      technology: {
        type: DataTypes.STRING(300),
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
        // allowNull: false,
      },
      img_link: {
        type: DataTypes.STRING(1000),
       
      },
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,

      // your other configuration here
    }
  );
};
