import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './NotFound.module.css';

function NotFound() {
  let history = useHistory();

  const redirectHandler = () => history.goBack();

  return (
    <main className={classes.NotFoundPage}>
      <div className={classes.InfoDiv}>
        <h1 className={classes.Emoji}>4<span role="img" aria-label="Face With Rolling Eyes Emoji">😔</span>4</h1>

        <h1 className={classes.Text}>
          OOPS! PAGE NOT FOUND
        </h1>

        <button
          className={classes.RedirectBtn}
          onClick={redirectHandler}>
          Go Back
        </button>
      </div>

      <div className={classes.Background}></div>
    </main>
  );
}
// 🙄

export default NotFound;