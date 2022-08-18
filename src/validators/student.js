const { check } = require('express-validator');
let studentValidator = [
    check('name', 'Name is required').notEmpty(),
    check('surname', 'Surname Name is required').notEmpty()
]
exports.studentValidator = studentValidator;