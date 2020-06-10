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

// app.use(fileUpload());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

// || Object.keys(req.files).length === 0

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const { myFile } = req.files;
  const { description, author } = req.body;

  // Use the mv() method to place the file somewhere on your server
  myFile.mv(`${__dirname}/uploads/${myFile.name}`, async (err) => {
    if (err) return res.status(500).send(err);

    // eslint-disable-next-line max-len
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
