const { Thoughts, User, Reaction } = require("../models");

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find()
      .then(async (thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get Single Thought
  getThoughtById(req, res) {
    Thoughts.findById(req.params.thoughtsId)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Add Thought
  addThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thoughts!" })
          : User.findByIdAndUpdate(
              req.body.userId,
              { $addToSet: { thoughts: thought._id } },
              { runValidators: true, new: true }
            ).then((thought) =>
              !thought
                ? res.status(404).json({ message: "No thoughts!" })
                : res.json(thought)
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update Thought
  changeThoughtById(req, res) {
    Thoughts.findByIdAndUpdate(
      req.params.thoughtsId,
      { $set: { thoughtText: req.body.thoughtText } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought exists" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete Thought
  deleteThought(req, res) {
    Thoughts.findByIdAndRemove(req.params.thoughtsId).then((thought) =>
      !thought
        ? res.status(404).json({ message: "No Thought exists with this id" })
        : res.json({message: "Thought has been deleted!"})
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  },
  // Create Reaction for the thought
  createReaction(req, res) {
    Thoughts.findByIdAndUpdate(
      req.params.thoughtsId,
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
    .then((reaction) => 
    !reaction
    ? res.status(404).json({message: "No Thoughts exist"})
    : res.json(reaction)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  },
  // Delete reaction from the thought
  // deleteReaction(req, res) {
  //   Thoughts.findByIdAndUpdate(
  //     req.params.thoughtsId,
  //     { $pull: { reactions: { reactionId: params.reactionId } } },
  //     { new: true }
  //   )
  //   .then((reaction) => res.json(reaction))
  //   .catch((err) => res.status(500).json(err));
  // },
};