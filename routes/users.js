const express = require('express');
const router = express.Router();

usersController = require('../controllers/usersController');


// get all users
router.get('/', usersController.getAll);


router.get('/:id', usersController.getSingle);


module.exports = router;