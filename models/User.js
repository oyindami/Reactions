const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //because you dont want to have more than one user, this makes it unique to the one user; only one person can have it in the database//
      match: [/.+@.+\..+/, 'Must match an email address!'], //taking sny string in form of the @ and building out the email
    },
    thoughts: [//making it in array so that a user can have mulitple thoughts entered//
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', //THoughts
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friends', //User
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;