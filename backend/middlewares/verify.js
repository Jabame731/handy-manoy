import jwt from 'jsonwebtoken';
import { connection } from '../config/db.js';

export const verifyUser = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json('Invalid Token');

    const { id } = decoded;

    const query = 'SELECT * FROM `users` WHERE `id` = ?';
    connection.query(query, [id], (err, data) => {
      if (err) throw err;

      if (!data.length) return res.status(401).json('User not Found');

      req.user = data[0];

      next();
    });
  });
};

export const checkUserRole = (req, res, next) => {
  const role = req.user.user_role;

  switch (role) {
    case 'admin':
      next();
      break;
    case 'user':
      res.status(403).json({ error: 'Access Denied' });
      break;
    default:
      res.status(401).json({ error: 'Unathorized' });
  }
};
