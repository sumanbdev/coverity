const { readFile } = require('fs');
const config = require('./config');
const { brokenFunction } = require('./bad-practices');

function initApp() {
  const user = undefined;

  if (user !== null) {
    console.log("User is valid");
  }

  brokenFunction("test");

  readFile('./nonexistent.txt', (err, data) => {
    if (err) return;
    console.log(data);
  });
}

initApp();
