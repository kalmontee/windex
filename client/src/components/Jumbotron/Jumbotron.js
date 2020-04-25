import React from 'react';
import './jumbotron.css';

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="jumboTitle">My Virtual React Bookshelf</h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google Books API
          </a>
        </div>
    </div>
  );
}



export default Jumbotron;