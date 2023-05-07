import express from 'express';
import multer from 'multer';
import authRoute from './routes/authorization.js';

const app = express();

//to allow form in sending data in the api eg. postman
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//image upload using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('api/upload', upload.single('file'), function (req, res, next) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api', authRoute);

const port = 8800;
app.listen(port, () => {
  console.log(`port runs at ${port}`);
});
