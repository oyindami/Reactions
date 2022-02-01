const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, //MDB and renames the id/
      default: () => new Types.ObjectId(), //that is the id type 
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //function to format the date 
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;