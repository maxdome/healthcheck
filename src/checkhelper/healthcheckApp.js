'use strict';

const request = require('superagent');

module.exports = options => callback => {
  options.protocol = options.protocol ? options.protocol.split(':')[0] : '';

  request
    .get(options.protocol + '://' + options.hostname + '/health/app')
    .timeout(5000)
    .end(callback);
};
