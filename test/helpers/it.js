'use strict';

const { it } = require('mocha');
const co = require('co');

module.exports = (description, generatorFunction) => it(description, co.wrap(generatorFunction));
