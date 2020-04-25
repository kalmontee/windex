import React, { Component } from 'react';
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookDetails } from '../components/BookDetails/BookDetails';
import { Input } from '../components/Form';
import API from "../utils/API";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    books: [],
  }

  // Making a request to Google Books API
  searchGoogleBooks = (query) => {
    API.search(query)
      .then(res => {
        console.log(res);
        this.setState({ books: res.data.items, search: this.state.search });
      })
      .catch(err => err)
  }

  // To grabbed the value of the user Input
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  // OnClick button function to receive all the data
  searchBooksHandler = () => {
    this.searchGoogleBooks(this.state.search);
  }

  render() {
    let booksResult = null;
    if (this.state.books.length > 0) {
      booksResult = (
        <BookList>
          {this.state.books.map(book => {
            return (
              <div className="BookSection" key={book.id}>
                <BookDetails
                  authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                  subtitle={book.volumeInfo.subtitle ? book.volumeInfo.subtitle : ["No Subtitle Available"]}
                  title={book.volumeInfo.title}
                  synopsis={book.volumeInfo.description ?
                    book.volumeInfo.description : "No Description Available"}
                  link={book.volumeInfo.infoLink}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                    book.volumeInfo.imageLinks.thumbnail : "No Image Available"}
                >
                </BookDetails>
              </div>
            )
          })}
        </BookList>
      );
    }

    return (
      <Container>
        <Row>
          <Col size="md-12">
              <Input
                name="query"
                value={this.state.value}
                handleInputChange={this.handleInputChange}
                searchBooksHandler={this.searchBooksHandler}
              />
              {booksResult}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Search;