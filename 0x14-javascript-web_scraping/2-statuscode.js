#!/usr/bin/node

const request = require('request');
const API_URL = process.argv[2];

request.get(API_URL, function (error, response, body) {
  if (error) console.error(error); else {
    const code = response.statusCode;
    console.log(`code: ${code}`);
  }
});
