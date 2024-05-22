const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  chatId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A message must be belonged to a chat'],
    ref: 'Chat',
  },
  senderId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A message must be belonged to a sender'],
    ref: 'User',
  },
  content: {
    type: String,
  },
  type: {
    type: String,
    enum: ['text' | 'audio' | 'image' | 'video' | 'document'],
    default: 'text',
  },
  mediaUrl: {
    type: String,
  },
  replyTo: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    deault: Date.now,
  },
});

const Message = model('Message', messageSchema);

module.exports = Message;

