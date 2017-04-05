## promoter

This is a shim around @google-cloud/pubsub to allow you to use it even when you're not in a google cloud environment, and to let you use your own mock function for publishes in your tests

### usage

```js
'use strict';

const Promoter = require('promoter')();

Promoter.topic('someTopic').get().then(([topic]) => {

  topic.publish({ some: 'stuff' });
});
```

When used in a test, save a copy of your promoter instance somewhere and you can override the publisher method like so:


```js
'use strict';

const Promoter = require('promoter')();

const publish = (msg) => {
  
  return Promoter.topic('someTopic).get().then(([topic]) => {

    return topic.publish(msg);
  });
};

describe('publish', () => {

  it('can publish stuff', (done) => {

    Promoter.options.publisher = (msg) => {

      expect(msg).to.be.an.object();
      expect(msg.some).to.equal('message');
      done();
    };

    publish({ some: 'message' });
  });
});
```
