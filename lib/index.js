'use strict';

const PubSub = require('@google-cloud/pubsub');
const Mock = require('./mock');

module.exports = (creds) => {

  if (process.env.GCLOUD_PROJECT || process.env.PUBSUB_EMULATOR_HOST) {
    return PubSub(creds);
  }

  return new Mock(creds);
};
