const { Router } = require('express');
const { createUser,getUserId, deleteUser, editUser, getUser} = require('../controllers/user');

const router = Router();

router.post('/', createUser);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);
router.put('/:id', editUser);
router.get("/", getUser);

module.exports = router;
