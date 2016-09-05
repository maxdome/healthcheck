'use strict';

const request = require('superagent');

module.exports = () => (options) => (callback) => {
  request
    .get(options.protocol + '://' + options.hostname + '/health/app')
    .timeout(5000)
    .end(callback);
};
