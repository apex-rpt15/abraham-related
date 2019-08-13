const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

app.get('/recommended', (err, res) => {
  res.send('Recommended Tracks');
});

app.listen(port, () => {
  console.log(`Listening at port ${port}!`);
});