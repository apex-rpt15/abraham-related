const db = require('./db.js').save;

//50 songs names to be randomly generated
const songName = [
  'finally famous', 'stay fly', 'reach for the sky', 'in the sky', 'pull up', 'big wraith', 'woke up', 'started', 'goin up', 'I be up', 'now or never', 'grizzly', 'water', 'iphone', 'desktop', 'laptop', 'air force 1s', 'cruising', 'sunset', 'no traffic', 'laid back', 'slam dunk', 'go ham', 'tear the club up', 'jump', 'vroom', 'who what', 'when where', 'limitless', 'elevate', 'on a tuesday', 'new me', 'new you', 'new us', 'unbreakable', 'only baby', 'watch the clouds', 'loud', 'run', 'move ahead', 'assume form', 'jungle', 'forever', 'one more time', 'again', 'free', 'ghosttown', 'skateboard', 'cotton candy'
]

const trackGenerator = (songTitle) => {
  for (let i = 1; i < songName.length; i++) {
    let songLimit = songName[i]
    // console.log('relatedSongs: ', songLimit)
    //calling my database save fn to save these tracks
    db(songLimit);
  }
}

module.exports.trackGenerator = trackGenerator;
