const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const absolutPath = __dirname;
app.use(express.static(`${absolutPath}`));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(`${absolutPath}/views/index.html`);
});

app.get('/json', (req, res) => {
  const message = "Hello json";
  const message_send = process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message;
  res.json({ "message": message_send });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ "time": req.time });
});

app.get('/:word/echo', (req, res) => {
  const echoWord = req.params.word;
  res.json({ "echo": `${echoWord}` });
});

app.get('/name', (req, res) => {
  const { first, last } = req.query;
  res.json({ "name": `${first} ${last}` });
});

app.post('/name', (req, res) => {
  const { first, last } = req.body;
  res.json({ "name": `${first} ${last}` });
});

module.exports = app;