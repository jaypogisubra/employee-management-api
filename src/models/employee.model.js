const db = require('../config/db');

exports.findAll = async ({ search, limit, offset }) => {
  const like = `%${search || ''}%`;
  const [rows] = await db.query(
    `SELECT * FROM employees
     WHERE name LIKE ? OR email LIKE ? OR department LIKE ?
     LIMIT ? OFFSET ?`,
    [like, like, like, limit, offset]
  );
  return rows;
};

exports.countAll = async (search) => {
  const like = `%${search || ''}%`;
  const [[{ total }]] = await db.query(
    `SELECT COUNT(*) as total FROM employees
     WHERE name LIKE ? OR email LIKE ? OR department LIKE ?`,
    [like, like, like]
  );
  return total;
};

exports.findById = async (id) => {
  const [[row]] = await db.query(
    'SELECT * FROM employees WHERE id = ?', [id]
  );
  return row;
};

exports.create = async (data) => {
  const [result] = await db.query(
    'INSERT INTO employees SET ?', [data]
  );
  return result.insertId;
};

exports.update = async (id, data) => {
  const [result] = await db.query(
    'UPDATE employees SET ? WHERE id = ?', [data, id]
  );
  return result.affectedRows;
};

exports.remove = async (id) => {
  const [result] = await db.query(
    'DELETE FROM employees WHERE id = ?', [id]
  );
  return result.affectedRows;
};
