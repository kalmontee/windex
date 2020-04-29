import React from 'react';

import classes from './NotFound.module.css';

function notFound() {
  return (
    <main className={classes.NotFoundPage}>
      <div className={classes.Info}>
        <h1 className={classes.Emoji}>4<span role="img" aria-label="Face With Rolling Eyes Emoji">😔</span>4</h1>

        <h1 className={classes.Text}>
          OOPS! PAGE NOT FOUND
      </h1>
      </div>

      <div className={classes.Background}></div>
    </main>
  );
}
// 🙄

export default notFound;