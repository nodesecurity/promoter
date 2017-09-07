'use strict';

const Publisher = require('./publisher');
const Subscription = require('./subscription');

class Topic {
  constructor(name) {

    this.name = name;
    this.subscriptions = new Map();
    this.publishers = new Map();
    this.publishers.set('default', new Publisher());
  }

  get() {

    return Promise.resolve([this]);
  }

  publish(message) {

    return this.publishers.get('default').publish(message);
  }

  subscription(name, options) {

    if (this.subscriptions.has(name)) {
      return this.subscriptions.get(name);
    }

    const subscription = new Subscription(name, options);
    this.subscriptions.set(name, subscription);
    return subscription;
  }

  publisher(options) {

    const opts = JSON.stringify(options);
    if (this.publishers.has(opts)) {
      return this.publishers.get(opts);
    }

    const publisher = new Publisher(options);
    this.publishers.set(opts, publisher);
    return publisher;
  }
}

module.exports = Topic;
