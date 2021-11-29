const { Router } = require('express');
const { createUser,getUserId } = require('../controllers/user');

const router = Router();


router.post('/', createUser );
router.get("/:id",getUserId)




module.exports = router;