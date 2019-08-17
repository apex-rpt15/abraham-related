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
  //console.log prints all tracks from my seed
  // console.log('data from db line 18 ', data)
  let songInfo = new Recommended({
    song: data.song
  });
  songInfo.save(err => {
    //prints save message for every song
    // console.log('Successful save to DB');
    if (err) { console.log('Save Err ', err) }
  });
}


module.exports = {
  save, Recommended
}
