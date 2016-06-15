'use strict';

const request = require('superagent');

module.exports = () => (options) => (callback) => {
  request
    .get(options.protocol + '://' + options.hostname + '/interfacemanager-2.1/admin/monitoring/lbcheck')
    .timeout(5000)
    .end(callback);
};
