'use strict';

const co = require('co');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const app = require('../../src/app');

module.exports = co.wrap(function* invoke(functionName = 'handler', event = {}, context = {}) {
  /**
   * Inject serverless environment variables into process
   */
  const serverlessYaml = fs.readFileSync(path.join(__dirname, '../../serverless.yml'), 'utf-8');
  const config = yaml.safeLoad(serverlessYaml, 'utf8');
  process.env = Object.assign(process.env, config.provider.environment);

  let output = '';
  const callback = (err, response) => {
    output = response;
  };

  yield app[functionName](event, context, callback);

  return output.body;
});
