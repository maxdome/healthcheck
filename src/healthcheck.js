'use strict';

const async = require('async');

function healthcheck(services, callback) {
  const fns = [];
  const checkresults = {};
  for (const identifier in services || {}) {
    fns.push((subCallback) => {
      services[identifier]((err) => {
        if (err) {
          if (typeof err === 'object') {
            err.status = 'ERROR';
          } else {
            err = { status: 'ERROR', message: err };
          }
        } else {
          err = { status: 'OK' };
        }
        checkresults[identifier] = err;
        subCallback();
      });
    });
  }
  async.parallel(fns, function() {
    for (const identifier in checkresults) {
      if (checkresults[identifier].status === 'ERROR') {
        callback(true, checkresults);
        return;
      }
    }
    callback(null, checkresults);
  });
}

module.exports = () => (app, services) => {
  app.get('/health/app', (req, res) => {
    res.send({ status: 'OK' });
  });

  app.get('/health/details', (req, res) => {
    healthcheck(services, (err, checkresults) => {
      if (err) {
        res.status(503).send(checkresults);
      } else {
        res.send(checkresults);
      }
    });
  });

  app.get('/health/summary', (req, res) => {
    healthcheck(services, (err) => {
      if (err) {
        res.status(503).send({ status: 'ERROR' });
      } else {
        res.send({ status: 'OK' });
      }
    });
  });
};
