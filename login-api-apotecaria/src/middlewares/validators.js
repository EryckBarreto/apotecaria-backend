const { check, validationResult } = require('express-validator');

const validateUserSignup = [
    check('completeNameUser').isLength({ min: 3, max: 50 }).withMessage('O nome completo deve ter entre 3 e 50 caracteres')
                     .matches(/^[a-zA-Z\s]+$/).withMessage('O nome completo deve conter apenas letras e espaços'),
    check('emailUser').isEmail().withMessage('Formato de email inválido'),
    check('phoneUser').matches(/^\+55 \(\d{2}\) \d{5}-\d{4}$/).withMessage('O telefone deve estar no formato +55 (xx) xxxxx-xxxx'),
    check('cpfUser').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('O CPF deve estar no formato xxx.xxx.xxx-xx'),
    check('dateOfBirthUser').matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('A data de nascimento deve estar no formato dd-mm-yyyy'),
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