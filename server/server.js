const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');
const port = 8000;

const DB = process.env.DATABASE_CONNECTION;

mongoose
  .connect(DB, {})
  .then(() => {
    console.log('Connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

