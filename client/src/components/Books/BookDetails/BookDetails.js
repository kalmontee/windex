import React from 'react';

import { Container, Row, Col } from "../../Grid";
import Thumbnail from "../Thumbnails/Thumbnails";
import SaveBook from '../../UI/Button/SaveBookBtn/SaveBookBtn';
import classes from "./BookDetails.module.css";

const BookDetails = (props) => {
  return (
    <li>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9" >
            <h3 className={classes.BookTitle}>{props.title}</h3>
            <p className={classes.BookSubtitle}>{props.subtitle}</p>
            <h3 className={classes.BookAuthors}>{props.authors}</h3>
            <p className={classes.BookSynopsis}>{props.synopsis}</p>
            <Col size="xs-8 md-6" className="flex">
              <a
                className={classes.BookLink}
                target="_blank"
                href={props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a>
            </Col>
            <Col size="xs-6 md-6">
              <SaveBook />
            </Col>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default BookDetails;