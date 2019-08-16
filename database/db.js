const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedSongs', {useNewUrlParser: true });

//when db is open, logs success or err message
const db = mongoose.connection;
db.on('error', () =>  { console.log('DB Error') } );
db.once('open', () => { console.log('MongoDB Connected') } );

//define schema
const relatedSchema = mongoose.Schema({
  song: String
});

//define model
const Recommended = mongoose.model('Recommended', relatedSchema);

const save = (data) => {
  let songInfo = new Recommended({
    song: data.song
  });
  songInfo.save(err => {
    console.log('Successful save to DB');
    if (err) { console.log('Save Err ', err) }
  });
}

//callback to fetch data
let fetch = callback => {
  let cb = (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('info line 33: ', info);
      callback(info);
    }
  }
  Recommended.find({}).limit(3);
}

module.exports = {
  save, fetch
}