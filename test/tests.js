'use strict';

const { describe } = require('mocha');
const { expect } = require('chai');
const it = require('./helpers/it');
const invoke = require('./helpers/invoke');

describe('SLS AWS Node.js Boilerplate Test Suite', () => {
  it('should message', function* test() {
    expect(yield invoke()).to.eql('{"message":"UNICORN"}');
  });
});
