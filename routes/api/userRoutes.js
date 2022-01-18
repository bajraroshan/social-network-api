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

// Route for GET all users and POST user at /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// Route for GET one user, PUT user, and DELETE user at /api/users/:id
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser);


// Route for Add friend and delete a friend
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;