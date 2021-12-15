const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  return Sequelize.define("class", {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(20),
      validate: {
        notEmpty: true,
        len: [1, 20]
      },
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    studio_material: {
      type: DataTypes.STRING(300),
      validate: {
        isUrl: true,
      },
    },
    video_link: {
      type: DataTypes.STRING(300),
      validate: {
        isUrl: true,
      },
    },
    game_link: {
      type: DataTypes.STRING(300),
      validate: {
        isUrl: true,
      },
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    difficulty: {
      type: DataTypes.ENUM("Basica", "Intermedia", "Alta"),
      allowNull: false,
    },
    // date: {
    //   type: DataTypes.DATE,
    //   // allowNull: true,
    // },
  });
};

// ID ✅
// Título ✅
// Descripción ✅
// Material de Estudio ✅
// Valoración (Estrellas) ✅
// Link video ✅
// Link juego ✅
// Estado ✅
// Nivel de Dificultad (bajo, medio, alto) ✅
// Fecha ✅
