import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

function NavBar(props) {
  const [open, setOpen]= useState(false);
  const {user} = props

  return (
    <div>
        <nav>
          <div className="logo"> Closet.</div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="./ClosetPage">Closet.</Navbar.Brand>
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" exact to="/ActivityPage">Activity</NavLink>
            {!user && <NavLink className="nav-link" exact to="/loginpage">Login</NavLink>}
            {!user && <NavLink className="nav-link" exact to="/signup">signup</NavLink>}
            {user && <NavLink className="nav-link" exact to= "/logout">logout</NavLink>}
        </Navbar>
          <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "translateX(-500px)"}}>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>


          </ul>
        </nav>
    </div>
  );
}

export default NavBar;

