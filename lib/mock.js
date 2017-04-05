'use strict';

class Topic {
  constructor(name, options) {

    this.name = name;
    this.options = options;
  }

  get() {

    return Promise.resolve([this]);
  }

  publish(message) {

    return this.options.publisher(message);
  }
}

class MockedPubSub {
  constructor(options) {

    this.topics = new Map();
    this.options = options;

    if (!this.options.publisher) {
      this.options.publisher = Promise.resolve;
    }
  }

  topic(name) {

    if (this.topics.has(name)) {
      return this.topics.get(name);
    }

    const topic = new Topic(name, this.options);
    this.topics.set(name, topic);
    return topic;
  }
}

module.exports = MockedPubSub;
