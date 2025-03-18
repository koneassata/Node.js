// write-welcome.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) ;
  console.log('File has been saved!');
});
