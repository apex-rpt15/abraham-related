const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedSongs', {useNewUrlParser: true });

//when dp is open, logs success or err message
const db = mongoose.connection;
db.on('error', () =>  { console.log('DB Error') } );
db.once('open', () => { console.log('MongoDB Connected') } );

//define schema
const relatedSongs = mongoose.Schema({
  artistName: String,
  artistAvi: String,
  songName: String,
  plays: String,
  likes: String,
  reposts: String,
  comments: String
});

//define model
const Recommended = mongoose.model('Recommended', relatedSongs);

const save = (info) => {
  let artistInfo = new Recommended({
    artistName: info.artistName,
    artistAvi: info.artistAvi,
    songName: info.songName,
    plays: info.plays,
    likes: info.likes,
    reposts: info.reposts,
    comments: info.comments
  });
  artistInfo.save((err) => {
    if (err) { console.log('Save Err ', err) }
  });
}

module.exports.save = save;

