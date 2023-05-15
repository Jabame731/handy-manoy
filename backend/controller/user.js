import { connection } from '../config/db.js';

//get
export const getUser = (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT * FROM `users` WHERE `id` = ?';

  connection.query(query, [userId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json('Server Error');
    }

    if (data.length === 0) {
      res.status(400).json('User not found');
    }

    const user = data[0];

    res.status(200).json(user);
  });
};

//getall
export const getUsers = (req, res) => {
  const query = 'SELECT * FROM `users`';

  connection.query(query, (err, data) => {
    if (err) {
      console.log('Server Error');
    }

    return res.status(200).json(data);
  });
};

//update
export const updateUser = (req, res) => {
  const userId = req.params.id;

  const {
    username,
    email,
    first_name,
    middle_name,
    last_name,
    address,
    phone_number,
    telephone_number,
  } = req.body;

  const query = 'SELECT * FROM `users` WHERE `id` = ?';

  connection.query(query, [userId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(400).json('User not found');
    }

    const updateUserQuery =
      'UPDATE `users` SET `username` = ?, `email` = ?, `first_name` = ?, `middle_name` = ?, `last_name` = ?, `address` = ?, `phone_number` = ?, `telephone_number` = ?,';

    const values = [
      username,
      email,
      first_name,
      middle_name,
      last_name,
      address,
      phone_number,
      telephone_number,
    ];

    connection.query(updateUserQuery, [values], (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      const updatedUserQuery = 'SELECT * FROM `users` WHERE `id` = ?';

      connection.query(updatedUserQuery, [userId], (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json('Server Error');
        }

        const updatedUser = data[0];

        return res.status(200).json(updateUser);
      });
    });
  });
};

//delete
export const deleteUser = (req, res) => {
  const userid = req.params.id;

  const query = 'DELETE FROM `users` WHERE `id` = ?';

  connection.query(query, [userid], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json('Server Error');
    }

    if (data.length === 0) {
      return res.status(400).json('User not found');
    }

    return res.status(200).json('User is Deleted');
  });
};

//create admin account
export const createAdminUserAccount = (req, res) => {
  const {
    username,
    email,
    password,
    first_name,
    middle_name,
    last_name,
    image,
    address,
    phone_number,
    telephone_number,
  } = req.body;

  const query =
    'INSERT INTO users (`username`, `email`, `first_name`, `middle_name`, `last_name`, `image`, `address`, `phone_number`, `telephone_number`, `user_role`) VALUES (?)';

  const values = [
    username,
    email,
    first_name,
    middle_name,
    last_name,
    image,
    address,
    phone_number,
    telephone_number,
    'admin',
  ];

  connection.query(query, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json('User is Registered');
  });
};