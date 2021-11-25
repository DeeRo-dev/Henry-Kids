const { Router } = require('express');
const { addClass, deleteClass } = require('../controllers/clases');
const router = Router();


router.post('/', addClass);
router.delete('/:id', deleteClass);


module.exports = router;
