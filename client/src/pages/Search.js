import React, { Component } from 'react';

import { Container, Row } from "../components/Grid";
import Jumbotron from '../components/UI/Jumbotron/Jumbotron';
import BookDetails from '../components/Books/BookDetails/BookDetails';
import BookList from '../components/Books/BookDetails/BookList/BookList';
import InputSearch from '../components/InputSearch/InputSearch';
import Spinner from '../components/UI/Spinner/Spinner';
import Modal from '../components/UI/Modal/Modal';
import API from "../utils/API";

class SearchBooks extends Component {
  state = {
    search: "",
    message: "",
    loader: false,
    showModal: false,
    books: [],
  }

  // To grabbed the value of the user Input
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  // Closing the Modal once the user clicks anywhere besides the modal
  modalClosedHanlder = () => this.setState({ showModal: false });

  // OnClick button function to receive all the data
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGoogleBooks();
  }

  // Making a request to Google Books API
  searchGoogleBooks = () => {
    // Initialize the loader
    this.setState({ loader: true });

    API.search(this.state.search)
      .then(res => {
        this.setState({
          books: res.data.items,
          loader: false // remove the loader once it finds results
        });
      })

      // Will output an error.
      .catch(() => {
        if (this.state.search === "") {
          return this.setState({
            message: "Cannot enter an empty search.",
            showModal: true,
            modalClosed: false,
            loader: false
          })
        }

        this.setState({
          books: [],
          showModal: true,
          message: "We apolgize.. No Books Found, Try a Different Query"
        });
      });
  }

  saveBookHandler = (id) => {
    const book = this.state.books.find(book => book.id === id);

    const foundResults = {
      id: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }

    // Saving all books contents to the database
    API.saveBook(foundResults)
      .then(() => this.setState({ showModal: true, message: "Your book is now saved. Go to your Saved page to view!" }))
      .catch(() => this.setState({ showModal: true, message: "You already saved this book." }));
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
                authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : null}
                title={book.volumeInfo.title}
                synopsis={book.volumeInfo.description ? book.volumeInfo.description : null}
                link={book.volumeInfo.infoLink}
                thumbnail={book.volumeInfo.imageLinks === undefined ? null : book.volumeInfo.imageLinks.thumbnail}
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
          <Jumbotron />
        </Row>
        <Row>
          <InputSearch
            name="query"
            value={this.state.value}
            handleInputChange={this.handleInputChange}
            formSubmit={(event) => this.handleFormSubmit(event)}
          />
        </Row>
        <Modal
          show={this.state.showModal}
          modalClosed={this.modalClosedHanlder}>
          <h3>{this.state.message}</h3>
        </Modal>
        <Row>
          {booksResult}
        </Row>
      </Container>
    )
  }
}

export default SearchBooks;