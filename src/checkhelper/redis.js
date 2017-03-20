'use strict';

const async = require('async');

module.exports = (client, options) => callback => {
  options = options || {};
  options.getter = options.getter || 'getJSON';
  options.setter = options.setter || 'setJSON';
  const fns = [];
  if (options.read) {
    fns.push((subCallback) => {
      client[options.getter]('_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  if (options.write) {
    fns.push((subCallback) => {
      client[options.setter]('_', '_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  async.parallel(fns, callback);
};
