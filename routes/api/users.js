const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
// const notesCtrl = require('../../controllers/api/notes');

// POST route to handle a controller function /api/users
router.post('/', usersCtrl.create);

// POST route to handle log in controller
router.post('/login', usersCtrl.login)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST route to handle a controller function for a new note 
// router.post('/notes', usersCtrl.createNewNote)

// we need to export our router 
module.exports = router;