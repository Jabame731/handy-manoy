import { connection } from '../config/db.js';

//post
export const postService = (req, res) => {
  const { s_name, s_type, s_price, note } = req.body;
  const userId = req.user.id;
  if (!req.body) {
    return res.status(400).json('Please add all fields');
  }

  const query =
    'INSERT INTO `services` (`customer_id`, `s_name`, `s_type`, `s_price`, `note`) VALUES (?)';

  const values = [userId, s_name, s_type, s_price, note];

  connection.query(query, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    const getCreatedService = data[0];

    return res.status(200).json(getCreatedService);
  });
};

//update
export const updateService = (req, res) => {
  const id = req.params.id;

  const { s_name, s_type, s_price, note } = req.body;

  const serviceId = 'SELECT * FROM `services` WHERE `id` = ?';

  connection.query(serviceId, [id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(400).json('Service Not Found');
    }

    const service = data[0];

    //check if user is authorized to update the service
    if (service.customer_id !== req.user.id) {
      return res.status(401).json('User not Authorized');
    }

    //update the service
    const updateServiceQuery =
      'UPDATE `services` SET `s_name` = ?, `s_type` = ?, `s_price` = ?, `note` ';

    const values = [s_name, s_price, s_type, note];

    connection.query(updateServiceQuery, [values], (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      //fetch the update service
      const updatedServiceQuery = 'SELECT * FROM `services` WHERE `id` = ?';
      connection.query(updatedServiceQuery, [id], (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json('Server Error');
        }

        const updatedService = data[0];

        return res.status(200).json(updatedService);
      });
    });
  });
};

//delete
export const deleteService = (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM `services` WHERE `id` = ?;';

  connection.query(query, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json('Server Error');
    }

    if (data.length === 0) {
      return res.status(400).json('Service Not Found');
    }

    const service = data[0];

    if (service.customer_id !== req.user.id) {
      return res.status(401).json('User not Authorized');
    }

    return res.status(200).json('Service is Deleted');
  });
};

//get
export const getServicesByUser = (req, res) => {
  const userId = req.user.id;
  const query = 'SELECT * FROM services WHERE customer_id = ?';

  connection.query(query, [userId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json('Server Error');
    }
    return res.status(200).json(data);
  });
};

//getall
export const getServices = (req, res) => {
  const query = 'SELECT * FROM `services`';

  connection.query(query, (err, data) => {
    if (err) {
      console.log('Server Error');
    }

    return res.status(200).json(data);
  });
};
