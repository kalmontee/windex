import React from 'react';
import { Link } from "react-router-dom";

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Link to={props.link} className={props.active ? classes.Active : classes.NavLink}>{props.children}</Link>
  </li>
);

export default NavigationItem;