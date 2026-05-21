const { body } = require('express-validator');

exports.createValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('salary').isFloat({ min: 0 }).withMessage('Valid salary required'),
];

exports.updateValidator = [
  body('email').optional().isEmail().withMessage('Valid email required'),
  body('salary').optional().isFloat({ min: 0 }).withMessage('Valid salary'),
];
