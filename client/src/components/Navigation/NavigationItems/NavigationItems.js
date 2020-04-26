import React from 'react';
import { Link } from "react-router-dom";
// import Jumbotron from '../../UI/Jumbotron/Jumbotron';

import classes from './NavigationItems.module.css';

const NavBar = () => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <h2>Google Books</h2>
        <li>
          <Link to="/" activeClassName="active">
            Search
          </Link>
        </li>
        <li>
          <Link to="/saved" className={window.location.pathname === "/saved" ? classes.NavLink : classes.NavLink}>
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;

{/* <Link to="/saved" className={window.location.pathname === "/saved" ? classes.NavLink : classes.NavLink}>
Saved
</Link> */}