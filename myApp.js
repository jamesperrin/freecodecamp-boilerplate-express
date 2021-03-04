const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const absolutPath = `${__dirname}/views/index.html`;
  res.sendFile(absolutPath);
});

 module.exports = app;