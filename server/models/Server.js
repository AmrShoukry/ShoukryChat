const { Schema, model } = require('mongoose');

const serverSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Server Name is required'],
    minLength: [3, "Server name can't be less than 3 letters"],
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Server must have an owner'],
  },
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  segments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Segment',
    },
  ],
  bannedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  serverImage: {
    type: String,
    default: 'default.jpg',
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  blockingUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  policy: {
    type: String,
    enum: ['public', 'private'],
    default: 'private',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Server = model('Server', serverSchema);

module.exports = Server;

