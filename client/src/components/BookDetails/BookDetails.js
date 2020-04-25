import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";
import SaveBook from '../SaveBookBtn/SaveBookBtn';

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>
}

export class BookDetails extends Component {
  render() {
    // console.log(this.props)
    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9" >
              <h3 className="title">{this.props.title}</h3>
              <p className="subtitle">{this.props.subtitle}</p>
              <h3 className="authors">{this.props.authors}</h3>
              <p className="synopsis">{this.props.synopsis}</p>
              <Col size="xs-8 md-6" className="flex">
                <a
                  className="link"
                  target="_blank"
                  href={this.props.link}
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
}
