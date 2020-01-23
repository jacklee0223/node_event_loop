const express = require('express');
const app = express();
const crypto = require('crypto');
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
  // const worker = new Worker(function() {
  //   let counter = 0;

  //   while (counter < 1e9) {
  //     counter++;
  //   }
  // });

  // worker.onmessage = function(message) {
  //   console.log(message.data);
  //   res.send(message.data);
  // };

  // worker.postMessage();
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send(`Hey there`);
  });
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000);
