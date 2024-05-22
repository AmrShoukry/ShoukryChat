const { Schema, model } = require('mongoose');

const segmentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A Segment must have a name'],
    minLength: [3, "Segment Name can't be less than 3 letters"],
  },
  serverId: {
    type: Schema.Types.ObjectId,
    ref: 'Server',
    required: [true, 'A Segment must have a server'],
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
  ],
  bannedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Segment = model('Segment', segmentSchema);

module.exports = Segment;

