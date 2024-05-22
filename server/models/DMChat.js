const { Schema, model } = require('mongoose');

const dmchatSchema = new Schema({
  segmentId: {
    type: Schema.Types.ObjectId,
    ref: 'DMSegment',
    required: [true, 'A Chat must have a segment'],
  },
  user1Id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A DM chat can only be commited between 2 users'],
  },
  user2Id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A DM chat can only be commited between 2 users'],
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
});

