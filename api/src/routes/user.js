const { Router } = require('express');
const { createUser } = require('../controllers/user');

const router = Router();


router.post('/', createUser );




module.exports = router;