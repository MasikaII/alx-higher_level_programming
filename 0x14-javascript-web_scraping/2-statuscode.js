#!/usr/bin/node

const request = require('request');
const API_URL = process.argv[2];

request.get(API_URL, function (error, response, body) {
  statusCode = response.statusCode;
  console.log(`code: ${statusCode}`);
});
