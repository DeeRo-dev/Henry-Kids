const { Router } = require('express');
const { addClass, deleteClass, getClass, getClassEjempl ,editClass ,GetClassId} = require('../controllers/clases');

const router = Router();


router.post('/', addClass);

router.delete('/:id', deleteClass);

router.put("/:id", editClass)

router.get("/", getClass)

router.get("/all", getClassEjempl)

router.get("/:id", GetClassId)




module.exports = router;
