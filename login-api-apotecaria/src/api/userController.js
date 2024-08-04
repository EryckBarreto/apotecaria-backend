const { Router } = require('express');
const userService = require('../services/userService');
const { validateUserSignup } = require('../middlewares/validators');

const router = Router();

router.post('/signup', validateUserSignup, async (req, res, next) => {
    try {
        const userDTO = req.body;
        const { user } = await userService.signup(userDTO);

        delete user.passwordUser;

        return res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
});

module.exports = router;