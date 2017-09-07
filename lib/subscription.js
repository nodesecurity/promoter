'use strict';

const EventEmitter = require('events').EventEmitter;
const Message = require('./message');

class Subscription extends EventEmitter {
  constructor(name, options) {

    super();
    this.name = name;
    this.options = options;
  }

  get() {

    return Promise.resolve([this]);
  }

  close() {

    clearInterval(this._interval);
    return Promise.resolve();
  }

  on(type) {

    if (type === 'message') {
      this._interval = setInterval(() => {}, Number.POSITIVE_INFINITY);
    }

    super.on.apply(this, arguments);
  }

  inject(data, attributes) {

    this.emit('message', new Message(data, attributes));
  }
}

module.exports = Subscription;
