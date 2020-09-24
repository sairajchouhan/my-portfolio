const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('this is root');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
exports.api = functions.https.onRequest(app);
