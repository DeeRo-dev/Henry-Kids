const { Router } = require('express');
const { createUser,getUserId, deleteUser, editUser} = require('../controllers/user');

const router = Router();


router.post('/', createUser);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
router.put('/:id', editUser);




module.exports = router;