const express = require('express');
const app = express();

const absolutPath = __dirname;
app.use(express.static(`${absolutPath}`));

app.get('/', (req, res) => {
  res.sendFile(`${absolutPath}/views/index.html`);
});

 module.exports = app;