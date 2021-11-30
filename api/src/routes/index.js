const { Router } = require("express");
const categoryRutes = require("./category");
const classRoutes = require("./Clases")
const classUser = require("./user")
const relClassUser=require("./relClassUser")
const commentUser = require("./comment")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/category", categoryRutes); // esto me genera /kids/category*  (traigo las rotuterdel archivo pokemon.js)
router.use("/class", classRoutes);
router.use("/user", classUser);
router.use("/", relClassUser);
// Esto hay que moverlo a Clases.js
router.use("/comment", commentUser);
module.exports = router;


// POST /category/
