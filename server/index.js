const express = require('express');
const bodyParser = require('body-parser');
const seed = require('../database/seed.js');
const db = require('../database/db.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('../public/dist'))

app.post('/related', (res, req) => {
  console.log('Server post: ', req.body);
  seed.trackGenerator(req.body);
  // res.status(200).send('Post Success');
});

app.get('/related', (req, res) => {
  //expecting to see the posted data from postman
  console.log('request body: ', req.body); // undefined currently
  res.send('Hi Abraham');
  // db.fetch(req.body);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`);
});