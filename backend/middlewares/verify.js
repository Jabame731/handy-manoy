import jwt from 'jsonwebtoken';
import { connection } from '../config/db.js';

export const verifyUser = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const query = 'SELECT * FROM `users` WHERE `id` = ?';

      connection.query(query, [decoded.id], (err, data) => {
        if (err) {
          console.log(err);
          res.status(401).json('Not Authorized');
        }

        req.user = data[0];
        next();
      });
    } catch (error) {
      console.log(error);
      res.status(401).json('Not authorized');
    }
  }

  if (!token) {
    res.status(401).json('Not Authorized, no token');
  }
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
