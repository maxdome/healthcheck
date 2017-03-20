'use strict';

const async = require('async');

module.exports = (client, options) => callback => {
  const fns = [];
  if (options.read) {
    fns.push((subCallback) => {
      if (typeof client.healthcheck === 'function') {
        client.healthcheck().then(() => { subCallback(); }).catch(subCallback);
        return;
      }

      client.getJSON('_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  if (options.write) {
    fns.push((subCallback) => {
      if (typeof client.healthcheck === 'function') {
        client.healthcheck(true).then(() => { subCallback(); }).catch(subCallback);
        return;
      }

      client.setJSON('_', '_').then(() => { subCallback(); }).catch(subCallback);
    });
  }
  async.parallel(fns, callback);
};
