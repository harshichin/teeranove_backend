const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/get-all-users', userController.getAllUsers);
router.post('/add-users', userController.addUser);
router.delete('/delete-users/:id', userController.deleteUser);



module.exports = router;