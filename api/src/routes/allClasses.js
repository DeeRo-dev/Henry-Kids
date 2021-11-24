const { Router } = require("express");
const { Class, Valoration } = require('../db');

const router = Router();

router.get("/", (req, res, next) => {
    if (req.query.title) {
      return Class.findAll({
        attributes: ["id", "title", "description", "difficulty"],
        where: {
          title: {
            [Op.iLike]: `%${req.query.title}%`,
          },
        },
        include: { model: Valoration },
      }).then((Class) => {
        if (Class.length === 0) {
          return res.send("Not class found");
        }
        res.send(Class);
      });
    } else {
      return Class.findAll({
        attributes: ["id", "title", "description", "difficulty"],
        include: { model: Valoration },
      }).then((Class) => {
        res.send(Class);
      });
    }
  });

module.exports = router;