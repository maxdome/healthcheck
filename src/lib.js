'use strict';

module.exports = (config, app) => {
  return {
    healthcheck: require('./healthcheck.js')(app),
    checkhelper: {
      bbe: require('./checkhelper/bbe.js'),
      healthcheckApp: require('./checkhelper/healthcheckApp.js'),
      interfacemanager: require('./checkhelper/interfacemanager.js'),
      redis: require('./checkhelper/redis.js')
    }
  };
};
