'use strict';

require('dotenv').config();

module.exports.handler = async (event, context, callback) => {
  // Do awesome stuff
  // Keys from .env and SLS environment are accessed using process.env.NAME_OF_KEY

  await callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.MY_SECRET,
    }),
  });
};
