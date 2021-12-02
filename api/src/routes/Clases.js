const { Router } = require("express");
const router = Router();

const {
  addClass,
  deleteClass,
  getClass,
  getClassEjempl,
  editClass,
  GetClassId,
  addEval,
  getEval
} = require("../controllers/clases");


router.post("/", addClass);
router.delete("/:id", deleteClass);
router.put("/:id", editClass);
// router.get("/", getClass);
router.get("/gio", async (req, res, next) => {
    if(req.query.title){
      const {title} = req.query
      res.send("entró")
    }else{
      res.send("no entró")
    }
  
  
  /* const {title} = req.query
    //Recibo la request en una variable
    let classTotal = await getClass(); //Guardo mi controlador que trae todos los pokemons en una variable..
    if (title) { //Consulto si me pasan un nombre y lo busco en la variable de arriba
      let className = await classTotal.filter((el) => 
        el.title.toLowerCase().includes(title.toLowerCase())
      );
      className.length
        ? res.status(200).send(className) // Si lo encuentro lo devuelvo,
        : res.status(404).send("El curso ingresado no existe"); // y sino devuelvo el texto.
    } else {
      res.status(200).send(classTotal); //Sino devuelvo todos los pokemons
    }
  } */
});

router.get("/all", getClassEjempl);
router.get("/:id", GetClassId);



module.exports = router;
