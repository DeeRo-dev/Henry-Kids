const { Router } = require('express');
const { addClass, deleteClass, getClass, getClassEjempl } = require('../controllers/clases');

const router = Router();


router.post('/', addClass);
router.delete('/:id', deleteClass);

// router.get("/", getClass)

// router.get("/all", getClassEjempl)


module.exports = router;
