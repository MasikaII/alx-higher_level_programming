#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const write = process.argv[3];

fs.writeFile(file, write, error => {
  if (error) console.log(error);
});
