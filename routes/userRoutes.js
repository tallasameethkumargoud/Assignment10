const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.put('/edit', userController.updateUser);
router.delete('/delete', userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/uploadImage', userController.uploadImage);

router.post('/login', userController.login);
//router.get('/users', authMiddleware, getAllUsers); // Protect this route with JWT


module.exports = router;
