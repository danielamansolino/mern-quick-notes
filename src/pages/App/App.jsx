import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewNotes from '../NewNotes/NewNotes';
import AuthPage from '../AuthPage/AuthPage';
import MyNotesPage from '../MyNotesPage/MyNotesPage';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';

export default function App() {
  const[user, setUser] = useState(getUser());
  // function handleLoging 
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/notes/new" element={<NewNotes user={user} />} />
            <Route path="/notes" element={<MyNotesPage user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
    
}


