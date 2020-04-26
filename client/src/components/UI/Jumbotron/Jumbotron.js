import React from 'react';
import classes from './jumbotron.module.css';

function Jumbotron() {
  return (
    <div className={classes.Jumbotron}>
      <h1>My Virtual React Bookshelf</h1>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
          Powered by Google Books API
          </a>
      </div>
    </div>
  );
}

export default Jumbotron;