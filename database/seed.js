const server = require('../server/index.js');
const db = require('./db.js');

//we are iterating from 0 - 99 records
const trackGenerator = (/*would I need an arg? hmm..*/) => {
  for (let i = 0; i < 99; i++) {
    //need to do something with this random number track generator
  }
}

/*
originally thought I needed to create dummy data to iterate through my db for my module,
I may not need everything I passed into my DB. Ask @ team meeting tomorrow.
*/

//50 artist names to be ramdomly generated
// const artistName = [
//   'daBaby', 'lilBaby', 'bigBaby', 'cryBaby', 'lilBabyDaBaby', 'daOneAndOnlyBaby', 'yungBaby', 'bigBaby', 'bigHeadedBaby', 'grownBaby', 'tallBaby', 'sleepyBaby', '90sBaby', '80sBaby', 'futureBaby', 'lilYung', 'yungLil', 'lilOG', 'OG', 'banana man', 'allergic2Babies', 'lilBeehive', 'yungBeehive', 'organicBaby', 'organicBeehive', 'lilOrganic', 'bigOrganic', '100percentOrganic', 'realRawSpitta', 'day1troubleMaker', 'yung', 'stayYung', 'yungWithoutO', 'lilAlways', 'bigLil', 'bigTimer', 'baby', 'lil water bottle', 'blk water', 'iPhone2020', 'lilPhone', 'yungPhone', 'lilBigYungsta', 'bigBlessed', 'skyToucher', 'nowOrNever', 'smartMan', 'cottonCandy'
// ]

//50 songs names to be randomly generated
// const songName = [
//   'finally famous', 'stay fly', 'reach for the sky', 'in the sky', 'pull up', 'big wraith', 'woke up', 'started', 'goin up', 'I be up', 'now or never', 'grizzly', 'water', 'iphone', 'desktop', 'laptop', 'air force 1s', 'cruising', 'sunset', 'no traffic', 'laid back', 'slam dunk', 'go ham', 'tear the club up', 'jump', 'vroom', 'who what', 'when where', 'limitless', 'elevate', 'on a tuesday', 'new me', 'new you', 'new us', 'unbreakable', 'only baby', 'watch the clouds', 'loud', 'run', 'move ahead', 'assume form', 'jungle', 'forever', 'one more time', 'again', 'free', 'ghosttown', 'skateboard', 'cotton candy'
// ]

// module.exports = {
//   artistName, songName
// }