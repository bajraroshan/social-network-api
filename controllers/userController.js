const { User, Thought, Reaction } = require("../models");

module.exports = {
    //get all users
  getUsers(req, res) {
    User.find({})
      .populate({
        //at thoughts
        path: "thoughts",
        select: "thoughtText createdAt reactions reactionCount",
      })
      .populate({
        // at friends
        path: "friends",
        // doesn't display __v
        select: "-__v",
      })
      // doesn't display __v
      .select("-__v")
      // sorts by newest
      .sort({ _id: -1 })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
    // get one user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate({
      //at thoughts
      path: 'thoughts',
      // doesn't display __v
      select: '-__v'
   })
   .populate({
      // at friends
      path: 'friends',
      // doesn't display __v
      select: '-__v'
   })
   // doesn't display __v
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
    // update user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
    // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : Thought.deleteMany({ _id: { $in: user.thought } });
      })
      .then(() => res.json({ message: "User has been deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) => 
      !user 
        ? res.status(404).json({ message: "No user with this id!" })
        : User.findByIdAndUpdate(
          req.params.friendId,
          { $addToSet: { friends: req.params.userId } },
          { runValidators: true, new: true }
        ).then((friend) =>
          !friend
            ? res.status(404).json({ message: "No user with this id!" })
            : res.json(friend)
        )
  )
      .catch((err) => res.status(400).json(err));
  },
// remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendsId } },
      { runValidators: true, new: true }
    )
      .then((user) => 
      !user
          ? res.status(404).json({ message: "No user with this id!" })
          : //adds user to friendId
            User.findByIdAndUpdate(
              req.params.friendId,
              { $pull: { friends: req.params.userId } },
              { runValidators: true, new: true }
            ).then((friend) =>
              !friend
                ? res.status(404).json({ message: "No user with this id!" })
                : res.json(friend)
            )
      )
      .catch((err) => res.status(400).json(err));
  },
};
