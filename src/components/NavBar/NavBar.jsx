import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  // console.log('this is setuser in Nav', setUser)
  function handleLogOut() {
    // Delegate to the users-service
    //delete the token from storage 
    userService.logOut();
    // set user to null
    // Update state will also cause a re-render
    setUser(null);
  }
    return (
      <nav>
        <Link to="/notes">My Notes</Link>
        &nbsp; | &nbsp;
        <Link to="/notes/new">New Notes</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    );
  }