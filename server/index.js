const express = require('express');
const bodyParser = require('body-parser');
const seed = require('../database/seed.js');
const db = require('../database/db.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('../public/dist'))

app.post('/related', (req, res) => {
  console.log('Server post: ', req.body);
  let savedSongs = songs => songs.forEach(db.save)
  seed.trackGenerator(req.body);
  res.status(200).send('Post Success');
});

app.get('/related', (err, res, req) => {
  //expecting to see the posted data from postman
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`);
});