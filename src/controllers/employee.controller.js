const { validationResult } = require('express-validator');
const Employee = require('../models/employee.model');

exports.getAll = async (req, res, next) => {
  try {
    const { search = '', page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * Number(limit);
    const [rows, total] = await Promise.all([
      Employee.findAll({ search, limit: Number(limit), offset }),
      Employee.countAll(search),
    ]);
    res.json({
      success: true,
      data: rows,
      pagination: { page: Number(page), limit: Number(limit), total }
    });
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: emp });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ success: false, errors: errors.array() });
    const id = await Employee.create(req.body);
    const emp = await Employee.findById(id);
    res.status(201).json({ success: true, data: emp });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ success: false, errors: errors.array() });
    const affected = await Employee.update(req.params.id, req.body);
    if (!affected) return res.status(404).json({ success: false, message: 'Not found' });
    const emp = await Employee.findById(req.params.id);
    res.json({ success: true, data: emp });
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const affected = await Employee.remove(req.params.id);
    if (!affected) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Employee deleted' });
  } catch (err) { next(err); }
};
