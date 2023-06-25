import sendRequest from "./send-request"
const BASE_URL = '/api/notes'

export async function newNote(note) {
  return sendRequest(BASE_URL, 'POST', note);
}

//grab from the data with a get all function 
// call the header in this function 

export async function getNotes(){
    // return sendRequest(BASE_URL + "/notes")
    // return sendRequest(`${BASE_URL}/notes`, 'GET')
    return sendRequest(BASE_URL, 'GET');
}