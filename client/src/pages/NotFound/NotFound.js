import React from 'react';

import classes from './NotFound.module.css';

function notFound() {
  return (
    <div className={classes.NotFound}>
      <h1 className={classes.Emoji}>4<span role="img" aria-label="Face With Rolling Eyes Emoji">😔</span>4</h1>
      
      <h1 className={classes.Text}>
      OOPS! PAGE NOT FOUND
      </h1>
    </div>
  );
}
// 🙄

export default notFound;