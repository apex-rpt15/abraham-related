const express = require('express');
const bodyParser = require('body-parser');
const seed = require('../database/seed.js');
const db = require('../database/db.js');
const request = require('request');

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

app.get('/related', (req, res) => {
  //expecting to see the posted data from postman
  //use request method to get res
  db.Recommended.find({
    song: req.body.song
  }).limit(3)
  .then((results) => {
    if (results.length) {
    res.send(results);
    } else {
      res.send('Error, no data in DB');
    }
  })
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`);
});