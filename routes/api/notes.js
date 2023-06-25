const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


// POST route to create a new note
router.post('/', notesCtrl.createNewNote);

// GET route to retrieve all notes
router.get('/', notesCtrl.indexNotes);
// router.post('/notes', notesCtrl.indexNotes);

module.exports = router;