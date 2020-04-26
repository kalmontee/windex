import React from 'react';

import classes from './BookList.module.css';

// BookList renders a bootstrap list item
const BookList = ({ children }) => (
  <ul className={classes.BookList}>{children}</ul>
);

export default BookList;