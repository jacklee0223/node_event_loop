const crypto = require('crypto'); // standard library included in Node

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  // runs after pbkdf2 has been executed
  console.log(`1: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  // runs after pbkdf2 has been executed
  console.log(`2: ${Date.now() - start}`);
});
