'use strict';

const request = require('superagent');

module.exports = options => callback => {
  const baseURL = options.url || (options.protocol + '://' + options.hostname + '/' + options.path);

  request
    .get(baseURL + '/admin/monitoring/lbcheck')
    .timeout(5000)
    .end(callback);
};
