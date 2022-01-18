const { User, Thought } = require("../models");

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // get one thought by it's id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create thought to a user
  createThought(req, res) {
    Thought.create(req.body)
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
        return res.status(500).json(err);
      });
  },
  //update thought by it's id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  // add Reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { runValidators: true, new: true }
    )
      .then((reaction) => {
        if (!reaction) {
          res.status(404).json({ message: "No thought with this id" });
          return;
        }
        res.json(reaction);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //delete Reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought exists with this id" })
          : res.json({ message: "Thought has been deleted!" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
