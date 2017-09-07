'use strict';

const EventEmitter = require('events').EventEmitter;
const Message = require('./message');

class Publisher extends EventEmitter {
  constructor(options) {

    super();
    this.options = options;
  }

  publish(message) {

    this.emit('message', new Message({ data: message.data, attributes: message.attributes }));
  }
}

module.exports = Publisher;
