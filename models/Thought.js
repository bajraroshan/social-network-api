const { Schema, Types, model } = require('mongoose');
const reactionSchema = require ('./Reaction');

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );

  // get total count of reactions and replies
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

  // Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;