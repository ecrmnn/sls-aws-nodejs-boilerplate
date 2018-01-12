'use strict';

const co = require('co');
require('dotenv').config();

module.exports.handler = co.wrap(function* handler(event, context, callback) {
  // Do awesome stuff
  // Keys from .env and SLS environment are accessed using process.env.NAME_OF_KEY

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.MY_SECRET,
    }),
  });
});
