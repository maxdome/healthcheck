'use strict';

const request = require('superagent');

module.exports = options => callback => {
  request
    .get(options.protocol + '://' + options.hostname + '/' + options.path + '/admin/monitoring/lbcheck')
    .timeout(5000)
    .end(callback);
};
