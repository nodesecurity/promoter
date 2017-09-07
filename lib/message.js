'use strict';

const Crypto = require('crypto');

class Message {
  constructor(data, attributes) {

    this.timestamp = new Date();
    this.id = Crypto.randomBytes(16).toString('hex');
    this.ackId = Crypto.randomBytes(16).toString('hex');
    this.data = typeof data !== 'string' ? JSON.stringify(data) : data;
    this.attributes = attributes;

    this.acked = false;
    this.nacked = false;
  }

  ack() {

    this.acked = true;
    return Promise.resolve();
  }

  nack() {

    this.nacked = true;
    return Promise.resolve();
  }
}

module.exports = Message;
