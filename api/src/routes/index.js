const { Router } = require("express");
const demoRutes = require("./demo");
const categoryRutes = require("./category");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/category", categoryRutes); // esto me genera /kids/category*  (traigo las rotuterdel archivo pokemon.js)
router.use("/demo", demoRutes); 

module.exports = router;


// POST /category/