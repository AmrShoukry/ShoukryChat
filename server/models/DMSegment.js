const { Schema, model } = require('mongoose');

const dmsegmentSchema = new Schema({
  serverId: {
    type: Schema.Types.ObjectId,
    ref: 'DMServer',
  },
  name: {
    type: String,
    required: [true, 'A Segment must have a name'],
    minLength: [3, "Segment Name can't be less than 3 letters"],
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
  ],
});

const DMSegment = model('DMSegment', dmsegmentSchema);

module.exports = DMSegment;

