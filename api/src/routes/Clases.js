const { Router } = require('express');
const { addClass } = require('../controllers/clases');
const router = Router();


router.post('/', addClass);



module.exports = router;
