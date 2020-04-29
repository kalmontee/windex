import React, { Component } from 'react';
import { Container, Row } from "../components/Grid";
import BookDetails from '../components/Books/BookDetails/BookDetails';
import BookList from '../components/Books/BookDetails/BookList/BookList';
import InputSearch from '../components/InputSearch/InputSearch';
import Spinner from '../components/UI/Spinner/Spinner';
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    message: "",
    loader: false,
    books: [],
  }

  // OnClick button function to receive all the data
  searchBooksHandler = () => this.searchGoogleBooks(this.state.search);

  // Making a request to Google Books API
  searchGoogleBooks = (query) => {
    // Initialize the loader
    this.setState({ loader: true });
    API.search(query)
      .then(res => this.setState({
        books: res.data.items,
        loader: false // remove the loader once it finds results
      }))
      // Throw in a Modal component displaying an error message.
      .catch(() =>
        this.setState({
          loader: true, // Continue the loader is there's an error
          books: [],
          message: "No New Books Found, Try a Different Query" // Needs to be placed somewhere (could throw modal here)
        })
      );
  }

  // To grabbed the value of the user Input
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  saveBookHandler = (id) => {
    let book = this.state.books.find(book => book.id === id);

    // Saving all books contents to the database
    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
      .then(this.setState({ message: alert("Your book is saved") })) // Alerting the user the book has been saved.
      .catch(err => console.log(err)) // Pop a modal saying there's an alert
  }

  render() {
    let booksResult = null;
    if (this.state.books.length > 0) {
      booksResult = (
        <BookList>
          {this.state.books.map(book => {
            return (
              <BookDetails
                // Getting books with the same IDs. If they have the same ID then give book.etag as a second ID.
                key={book.id ? book.etag : null}
                authors={book.volumeInfo.authors.join(', ')}
                title={book.volumeInfo.title}
                synopsis={book.volumeInfo.description ? book.volumeInfo.description : null}
                link={book.volumeInfo.infoLink}
                // Sometimes the API does not have a imageLinks thumbnail images. Gives me undefined -- bug
                thumbnail={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : null}
                booksBtnHandler={() => this.saveBookHandler(book.id)}
                name="Save Book"
                btnType={"SaveBtn"}
              />
            )
          })}
        </BookList>
      );
    }

    if (this.state.loader) {
      booksResult = <Spinner />
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