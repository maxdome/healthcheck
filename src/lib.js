'use strict';

module.exports = () => {
  return {
    healthcheck: require('./healthcheck.js')(),
    checkhelper: {
      bbe: require('./checkhelper/bbe.js')(),
      interfacemanager: require('./checkhelper/interfacemanager.js')(),
      redis: require('./checkhelper/redis.js')()
    }
  };
};
