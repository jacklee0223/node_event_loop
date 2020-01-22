process.env.UV_THREADPOOL_SIZE = 2; // default thread number is 4. try changing to 2 to see what happens when you run this file in Node. Then try 5

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

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  // runs after pbkdf2 has been executed
  console.log(`3: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  // runs after pbkdf2 has been executed
  console.log(`4: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  // runs after pbkdf2 has been executed
  console.log(`5: ${Date.now() - start}`);
});
