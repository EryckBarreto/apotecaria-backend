const { Router } = require('express');
const userController = require('./userController');

const router = Router();

router.use('/users', userController);

module.exports = router;