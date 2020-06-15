const express = require('express')
const router = express.Router();
const userController = require('../controllers/userControllers.js');

router.get('/', userController.getAllUsers);
router.get('/getsingle/:id', userController.getSingleUser);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
