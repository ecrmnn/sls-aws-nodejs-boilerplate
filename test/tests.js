'use strict';

const { describe, it } = require('mocha');
const { expect } = require('chai');
const invoke = require('./helpers/invoke');

describe('SLS AWS Node.js Boilerplate Test Suite', () => {
  it('should message', async () => {
    console.log(JSON.parse(await invoke('handler', { url: 'https://www.finn.no/realestate/homes/ad.html?finnkode=300874757' })));
    // expect(await invoke()).to.eql('{"message":"UNICORN"}');
  });
});
