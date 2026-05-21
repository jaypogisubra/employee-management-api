const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/employee.controller');
const { createValidator, updateValidator } =
  require('../middleware/employeeValidator');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', createValidator, ctrl.create);
router.put('/:id', updateValidator, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
