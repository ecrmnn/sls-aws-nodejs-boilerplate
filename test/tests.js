'use strict';

const { describe, it } = require('mocha');
const { expect } = require('chai');
const invoke = require('./helpers/invoke');

describe('SLS AWS Node.js Boilerplate Test Suite', () => {
  it('should message', async () => {
    expect(await invoke()).to.eql('{"message":"UNICORN"}');
  });
});
