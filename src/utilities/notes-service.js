// to import all name exports we use this syntax 
// Import all named exports attached to a notessAPI object
// This syntax can be helpful documenting where the methods come from 
import * as notesApi from './notes-api';


export async function createNewNote(note) {
    console.log('this is note in notes-service createNewNote function', note)
    try {
      const response = await notesApi.newNote(note);
    //   localStorage.setItem('note', note);
      return response;
    } catch (error) {
      // Handle any errors that occurred during note creation
      console.error('Error creating note:', error);
      throw error;
    }
  }

// I need to delete to delete this 