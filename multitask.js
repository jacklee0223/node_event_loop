const https = require('https');
const fs = require('fs');
const crypto = require('crypto'); // standard library included in Node

const start = Date.now();

function makeRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function executeHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`1: ${Date.now() - start}`);
  });
}

makeRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log(`FS: ${Date.now() - start}`);
});

executeHash();
executeHash();
executeHash();
executeHash();
