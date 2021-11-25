const { Class, Category, Evaluation } = require("../db");
const router = require("./allClasses");

// Ruta para traer detalle por id - Incluye modelo Class, Category y Evaluation

router.get("/:id/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const classDetail = await Class.findAll({
      where: {
        id: id,
      },
      include: { model: Category, Evaluation },
    });
    res.send(classDetail);
  } catch (error) {
    next(error);
  }
});

module.exports = router;