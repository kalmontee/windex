import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavBar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <div>
        <h2>Google Books</h2>
      </div>
      <ul>
        <NavigationItem />
      </ul>
    </nav>
  )
}

export default NavBar;