import React, { Component } from 'react';
import { Container, Row, Col } from "../components/Grid";
import BookDetails from '../components/Books/BookDetails/BookDetails';
import BookList from '../components/Books/BookDetails/BookList/BookList';
import InputSearch from '../components/InputSearch/InputSearch';
import API from "../utils/API";
import classes from "./style.module.css";

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
        this.setState({
          books: res.data.items,
          search: this.state.search
        });
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
              <div className={classes.BookSection} key={book.id}>
                <BookDetails
                  authors={book.volumeInfo.authors ? book.volumeInfo.authors : null}
                  subtitle={book.volumeInfo.subtitle ? book.volumeInfo.subtitle : null}
                  title={book.volumeInfo.title}
                  synopsis={book.volumeInfo.description ?
                    book.volumeInfo.description : null}
                  link={book.volumeInfo.infoLink}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                    book.volumeInfo.imageLinks.thumbnail : null}
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
            <InputSearch
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