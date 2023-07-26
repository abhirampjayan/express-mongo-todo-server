const express = require('express');
const morgan = require('morgan');

const app = express('dev');

app.use(express.json());
app.use(morgan());

app.get('/', (req, res) =>
  res
    .status(200)
    .send(
      "<h1>Hey Namaskaram🙏!</h1><h2>Server is ready to work. Let's roll!</h2>"
    )
);

module.exports = app;
