import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavBar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <h2>Google Books</h2>
        <NavigationItem link="/" active>Search</NavigationItem>
        <NavigationItem link="" >Saved</NavigationItem>
      </ul>
    </nav>
  )
}

export default NavBar;

{/* <Link to="/saved" className={window.location.pathname === "/saved" ? ".NavLink .active" : classes.NavLink}>
Saved
</Link> */}