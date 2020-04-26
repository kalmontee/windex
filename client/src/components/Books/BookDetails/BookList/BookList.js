import React from 'react';

import classes from './BookList.module.css';

const BookList = ({ children }) => (
  <ul className={classes.BookList}>{children}</ul>
);

export default BookList;