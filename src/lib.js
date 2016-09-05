'use strict';

module.exports = () => {
  return {
    healthcheck: require('./healthcheck.js')(),
    checkhelper: {
      bbe: require('./checkhelper/bbe.js')(),
      healthcheckApp: require('./checkhelper/healthcheckApp.js')(),
      interfacemanager: require('./checkhelper/interfacemanager.js')(),
      redis: require('./checkhelper/redis.js')()
    }
  };
};
