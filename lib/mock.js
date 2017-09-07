'use strict';

const Topic = require('./topic');

class MockedPubSub {
  constructor(options = {}) {

    this.topics = new Map();
    this.options = options;
  }

  topic(name) {

    if (this.topics.has(name)) {
      return this.topics.get(name);
    }

    const topic = new Topic(name);
    this.topics.set(name, topic);
    return topic;
  }
}

module.exports = MockedPubSub;
