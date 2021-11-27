const { Router } = require('express');
const {createSubscriber } = require('../controllers/createUser');

const router = Router();


router.post("/:idUs/:idClas", createSubscriber)



module.exports = router;