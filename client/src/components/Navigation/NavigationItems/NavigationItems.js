import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavBar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <div>
        <h2>Virtual <span>G</span>Books</h2>
      </div>
      <ul>
        <NavigationItem link="/">Search</NavigationItem>
        <NavigationItem link="/saved">Saved</NavigationItem>
      </ul>
    </nav>
  )
}

export default NavBar;