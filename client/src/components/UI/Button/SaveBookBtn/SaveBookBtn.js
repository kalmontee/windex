import React from 'react';

import classes from './SaveBookBtn.module.css';

const SaveBookBtn = (props) => (
   <button className={classes.SaveBookBtn} onClick={() => props.bookBtnHandler(id)}>
      Save Book
   </button>
)

export default SaveBookBtn;