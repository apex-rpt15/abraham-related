const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/relatedSongs', {useNewUrlParser: true });

//define schema and model
const schema = mongoose.Schema;
const Model = mongoose.model('RelatedTracks', schema);
const Songs = Model;

//when dp is open, logs success or err message
const db = mongoose.connection();
db.on('error', () =>  { console.log('DB Error') } )
db.on('open', () => { console.log('MongoDB Connected') } )

const relatedInfo = new Songs({
  artistName: String,
  artistAvi: String,
  songName: String,
  plays: String,
  likes: String,
  reposts: String,
  comments: String
});
