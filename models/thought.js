
   
const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./reactions');

//schema to create the thought model

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Please insert a thought',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    //timestamp:true //mongoose manages the time stamps for the code for me.
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;