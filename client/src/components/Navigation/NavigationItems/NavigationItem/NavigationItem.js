import React from 'react';
import { NavLink } from "react-router-dom";

import Aux from '../../../../HOC/Auxiliary';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <Aux>
    <li className={classes.NavigationItem}>
      <NavLink to="/" exact activeClassName={classes.Active}>Search</NavLink>
    </li>

    <li className={classes.NavigationItem}>
      <NavLink to="/saved" exact activeClassName={classes.Active}>Saved</NavLink>
    </li>
  </Aux>
);

export default NavigationItem;