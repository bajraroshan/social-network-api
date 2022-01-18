const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  changeThoughtById,
  createReaction,
  deleteThought,
  // deleteReaction,
} = require("../../controller/thoughtController");

// Route for GET all thoughts and POST thought at /api/thoughts
router.route("/").get(getAllThoughts).post(addThought);

// Route for GET one thought, PUT thougt, and DELETE thought at /api/thoughts/:id
router
  .route("/:thoughtsId")
  .get(getThoughtById)
  .put(changeThoughtById)
  .delete(deleteThought);

// Set up for POST reaction at /api/thoughts/:id/reactions
router.route("/:thoughtsId/reactions").post(createReaction);

// router.route('/:thoughtsId/reactions/:reactionId')
// .delete(deleteReaction);

module.exports = router;
