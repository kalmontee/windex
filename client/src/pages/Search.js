import React, { Component } from 'react';
import { Container, Row } from "../components/Grid";
import BookDetails from '../components/Books/BookDetails/BookDetails';
import BookList from '../components/Books/BookDetails/BookList/BookList';
import InputSearch from '../components/InputSearch/InputSearch';
import Aux from '../HOC/Auxiliary';
import API from "../utils/API";

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
      .catch(err => console.log(err));
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

  saveBookHandler = (id) => {
    console.log("This");
  }

  render() {
    let booksResult = null;
    if (this.state.books.length > 0) {
      booksResult = (
        <BookList>
          {this.state.books.map(book => {
            return (
              <BookDetails
                // Getting multiple books of the same IDs. If they have the same ID then give book.etag as a second ID.
                key={book.id === book.id ? book.etag : null}
                authors={book.volumeInfo.authors ? book.volumeInfo.authors : null}
                title={book.volumeInfo.title}
                synopsis={book.volumeInfo.description ?
                  book.volumeInfo.description : null}
                link={book.volumeInfo.infoLink}

                // Sometimes the API does not have a imageLinks thumbnail images. Gives me undefined -- bug
                thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                  book.volumeInfo.imageLinks.thumbnail : null}
                SaveBookBtn={this.saveBookHandler}
              >
              </BookDetails>
            )
          })}
        </BookList>
      );
    }

    return (
      <Container>
        <Row>
          <InputSearch
            name="query"
            value={this.state.value}
            handleInputChange={this.handleInputChange}
            searchBooksHandler={this.searchBooksHandler}
          />
        </Row>
        <Row>
          {booksResult}
        </Row>
      </Container>
    )
  }
}

export default Search;