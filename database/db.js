const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedSongs', {useNewUrlParser: true });

//when db is open, logs success or err message
const db = mongoose.connection;
db.on('error', () =>  { console.log('DB Error') } );
db.once('open', () => { console.log('MongoDB Connected') } );

//define schema
const relatedSongs = mongoose.Schema({
  relatedSong: String
});

//define model
const Recommended = mongoose.model('Recommended', relatedSongs);

const save = (info) => {
  let songInfo = new Recommended({
    relatedSong: info.relatedSong
  });
  songInfo.save((err) => {
    if (err) { console.log('Save Err ', err) }
  });
}

//callback to fetch data
let fetch = callback => {
  let cb = (err, info) => {
    console.log('info line 29: ', info);
    if (err) {
      console.log(err);
    } else {
      console.log('info line 33: ', info);
      callback(info);
    }
  }
  Recommended.find(cb).limit(3);
}

module.exports = {
  save, fetch
}