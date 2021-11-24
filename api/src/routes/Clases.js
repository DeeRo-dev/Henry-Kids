const { Router } = require('express');
const { addClase } = require('../controllers/clases');
const router = Router();


router.post('/', addClase);



module.exports = router;
