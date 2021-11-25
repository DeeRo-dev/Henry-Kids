const { Router } = require("express");
const categoryRutes = require("./category");
const allClasses = require("./allClasses");
const createClass = require("./Clases")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/category", categoryRutes); // esto me genera /kids/category*  (traigo las rotuterdel archivo pokemon.js)
router.use("/allClasses", allClasses); // Ruta para traer todas las clases
router.use("/class", createClass);

module.exports = router;


// POST /category/
