import React from 'react';

import Thumbnail from "../Thumbnails/Thumbnails";
import classes from "./BookDetails.module.css";

const BookDetails = (props) => {
  return (
    <li className={classes.BookSection}>
      <section className={classes.Container}>
        <div className={classes.ImgContainer}>
          <Thumbnail src={props.thumbnail} />
        </div>
        <div className={classes.BookInfo}>
          <h3 className={classes.BookTitle}>{props.title}</h3>
          <h3 className={classes.BookAuthors}>{props.authors}</h3>
          <p className={classes.BookSynopsis}>{props.synopsis}</p>
          <div className={classes.BooksBtn}>
            <a
              className={classes.BookLink}
              target="_blank"
              href={props.link}
              rel="noopener noreferrer"
            >Go to book!
            </a>

            <button
              className={[classes.Button, classes[props.btnType]].join(' ')}
              onClick={props.booksBtnHandler}>{props.name}
            </button>

          </div>
        </div>
      </section>
    </li>
  );
}

export default BookDetails;