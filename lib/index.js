'use strict';

const PubSub = require('@google-cloud/pubsub');
const Mock = require('./mock');

module.exports = (creds) => {

  if (process.env.GCLOUD_PROJECT) {
    return PubSub(creds);
  }

  return new Mock(creds);
};
