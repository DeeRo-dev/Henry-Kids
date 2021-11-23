const { Router } = require("express");
const demoRutes = require("./demo");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/demo", demoRutes); // esto me genera /api/pokemon/*  (traigo las rotuterdel archivo pokemon.js)

module.exports = router;
