const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    changeThoughtById,
    createReaction,
    deleteThought,
} = require('../../controller/thoughtController');

// Set up GET all and POST at /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:thoughtsId')
  .get(getThoughtById)
  .put(changeThoughtById)
  .delete(deleteThought);

router.route('/:thoughtsId/reactions')
  .post(createReaction);

module.exports = router;