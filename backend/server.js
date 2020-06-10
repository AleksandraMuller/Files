import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import { File } from './models/File';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/myuploadFiles';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = Promise;

const port = process.env.PORT || 9000;
const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field  is used to retrieve the uploaded file
  const { myFile } = req.files;
  const { description, author } = req.body;
  const uploadPath = `${__dirname}/uploads/${myFile.name}`;

  // Use the mv() method to place the file on your server
  myFile.mv(uploadPath, async (err) => {
    if (err) return res.status(500).send(err);

    const file = new File({
      name: myFile.name,
      description,
      date: Date.now(),
      type: myFile.mimetype,
      author,
      size: myFile.size,
    });
    await file.save();
    res.redirect('http://localhost:3000/');
  });
});

app.get('/', (_, res) => {
  res.send('Welcome to my uploader');
});

app.get('/files', async (_, res) => {
  res.json(await File.find());
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
