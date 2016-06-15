'use strict';

const async = require('async');

module.exports = () => (client, options) => (callback) => {
  const fns = [];
  if (options.read) {
    fns.push((subCallback) => {
      client.getJSON('_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  if (options.write) {
    fns.push((subCallback) => {
      client.setJSON('_', '_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  async.parallel(fns, callback);
};
