const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trimmed: true,
      unique: true
    },
    email: {
      type: String,
      match: /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z]{2,6})$/,
      unique: true, 
      required: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'friends',
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

// get total count of friends
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

// create the user model using userSchema
const User = model('user', userSchema);

// export the model
module.exports = User;