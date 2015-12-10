# random-config


## Example

```javascript
  const random = require('random-config');
  const configs = {
    redis: [
      '10.10.10.1',
      '10.10.10.2',
      '10.10.10.3'
    ]
  }

  const redisConfig = random(configs.redis);
```
