const { Router } = require('express');
const { addClass ,getClass, getClassEjempl} = require('../controllers/clases');
const router = Router();


router.post('/', addClass);

router.get("/", getClass)

router.get("/all", getClassEjempl)


module.exports = router;
