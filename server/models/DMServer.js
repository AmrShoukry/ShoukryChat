const { Schema, model } = require('mongoose');

const dmserverSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A DM Server must have an owner'],
    ref: 'User',
  },
  segments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Segment',
    },
  ],
  blockingUser: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const DMServer = model('DMServer', dmserverSchema);

module.exports = DMServer;

