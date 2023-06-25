const Note = require('../../models/note')


// create a function to grab the notes for the data base 
// const note = await find(notes)
// this will be my index
async function indexNotes(req, res) {
    try {
      const notes = await Note.find({user: req.user._id});
      console.log('this is notes in indexNotes', notes)
      res.status(200).json(notes);
    } catch (error) {
      console.error('Error retrieving notes:', error);
      res.status(500).json(error);
    }
  }

async function createNewNote(req, res) {
    console.log('this is req.body.user in notes controllers', req.body.user);
    // const { text, user } = req.body;

    try {
        // // Create a new note using the Note model
        // // const note = await Note.create({ text, user });
        // const note = await Note.create(req.body);

        // // Return the created note in the response
        // res.json(note);
        const note = await Note.create({
          text: req.body.text,
          user: req.body.user,
        });
        res.status(201).json(note);

    } catch (error) {
        // Handle any errors that occur during note creation
        console.error('Error creating note:', error);
         res.status(500).json(error);
    }
}


module.exports = {
    createNewNote,
    indexNotes
}