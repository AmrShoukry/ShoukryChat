const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A Chat must have a name'],
    minLength: [3, "Chat Name can't be less than 3 letters"],
  },
  segmentId: {
    type: Schema.Types.ObjectId,
    ref: 'Segment',
    required: [true, 'A chat must have a segment'],
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
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

const Chat = model('Chat', chatSchema);

module.exports = Chat;

