const { Schema, model } = require('mongoose');
const validator = require('validator');
const { hash } = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    minLength: [2, "First Name can't be less than 2 characters"],
  },

  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    minLength: [2, "Last Name can't be less than 2 characters"],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'This username already exists'],
    match: [
      /^[a-z0-9]+$/,
      'Username must contain lowercase characters and numbers only',
    ],
    // index: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email already exists'],
    validate: [validator.isEmail, 'This email is invalid'],
    lowercase: true,
    // index: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
  },
  passwordConfirmation: {
    type: String,
    required: [true, 'Password Confirm is required'],
    validate: {
      validator: function (passwordConfirm) {
        if (this.password === undefined) {
          this.password = passwordConfirm;
        }
        return this.password === passwordConfirm;
      },
      message: "Password Confirm doesn't match the entered password",
    },
  },
  profilePicture: {
    type: String,
    default: 'default.jpeg',
  },
  bio: {
    type: String,
    default: 'Hello There I am using ShoukryChat!',
  },
  status: {
    type: String,
    enum: ['Active', 'Offline'],
    default: 'Offline',
  },
  active: {
    type: String,
    enum: ['active', 'holding', 'deactivated'],
    default: 'holding',
  },
  token: {
    type: String,
    // index: true,
  },
  craetedAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  nameLastModifiedAt: {
    type: Date,
    default: null,
  },
  usernameLastModifiedAt: {
    type: Date,
    default: null,
  },
  lastSeenAt: {
    type: Date,
    default: Date.now,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  servers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Server',
    },
  ],
  bannedServers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'server',
    },
  ],
  bannedSegments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Segment',
    },
  ],
  bannedChats: [
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
  lastSeenMessage: [
    // ?????????????????????????????????????????????????????????
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
  blockingServers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Server',
    },
  ],
  preferredTheme: {
    type: String,
    required: [true, 'Theme is required'],
  },
  preferredLanguage: {
    type: String,
    required: [true, 'Language is required'],
  },
  preferredMode: {
    type: String,
    required: [true, 'Mode is required'],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await hash(this.password, 10);
  this.passwordConfirmation = this.password;

  next();
});

const User = model('User', userSchema);

module.exports = User;

