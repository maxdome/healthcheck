# Example

```
const { checkhelper, healthcheck } = require('mxd-healthcheck')(config, app);

const services = {};
healthcheck(services);
```


# Services

List of check functions for the external services

```
const service = (callback) => {
  if (/* check if the external dependency is available like needed */) {
    callback();
  } else {
    callback(/* reason why the external dependency is not OK */);
  }
}
```


# checkhelpers

Check functions for some common external services

## BBE (= MMW)

```
const service = checkhelper.bbe(/* connection config */);
```

## Healthcheck App (= Bifrost, Heimdall, Skidbladnir)

```
const service = checkhelper.healthcheckApp(/* connection config */);
```

## Interfacemanager (= MMW-Proxy, = API)

```
const service = checkhelper.interfacemanager(/* connection config */);
```

## Redis

```
const service = checkhelper.redis(client, { read: true, write: true });
```


# Routes

* `/health/app`: response only the status of the app without checking the external services
* `/health/details`: response the reason instead of `ERROR` for the external serives
* `/health/summary`: response only the status of the external services with `OK` and `ERROR` 
