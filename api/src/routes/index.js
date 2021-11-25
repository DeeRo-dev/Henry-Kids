const { Router } = require("express");
const categoryRutes = require("./category");
const allClasses = require("./allClasses");
const classRoutes = require("./Clases")
const classDetail = require("./classDetail")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/category", categoryRutes); // esto me genera /kids/category*  (traigo las rotuterdel archivo pokemon.js)
router.use("/class", classRoutes);

// Esto hay que moverlo a Clases.js
router.use("/allClasses", allClasses); // Ruta para traer todas las clases
router.use("/:id/", classDetail); // Ruta para detalles por ID

module.exports = router;


// POST /category/
