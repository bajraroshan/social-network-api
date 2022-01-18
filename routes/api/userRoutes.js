const router = require('express').Router();

const {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    addFriend,
    deleteFriend,
    deleteUser,
} = require('../../controller/userController');

// Set up GET all and POST at /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser);


// Add and delete a friend
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;