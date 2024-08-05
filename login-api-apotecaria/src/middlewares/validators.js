const { check, validationResult } = require('express-validator');

const validateUserSignup = [
    check('completeNameUser')
        .isLength({ min: 3, max: 50 })
        .withMessage('O nome completo deve ter entre 3 e 50 caracteres')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('O nome completo deve conter apenas letras e espaços'),
    check('emailUser').isEmail().withMessage('Formato de email inválido'),
    check('cpfUser').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('O CPF deve estar no formato xxx.xxx.xxx-xx'),
    check('passwordUser').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateUserSignup,
};
