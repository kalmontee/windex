import React, { useState } from "react";

import { Container, Row } from "../components/Grid";
import Jumbotron from "../components/UI/Jumbotron/Jumbotron";
import BookDetails from "../components/Books/BookDetails/BookDetails";
import BookList from "../components/Books/BookDetails/BookList/BookList";
import InputSearch from "../components/InputSearch/InputSearch";
import Spinner from "../components/UI/Spinner/Spinner";
import Modal from "../components/UI/Modal/Modal";
import API from "../utils/API";

const SearchBooks = () => {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState([]);

  const searchGoogleBooks = (value) => {
    // Initialize the loader
    setLoader(true);

    API.search(value)
      .then((res) => {
        setBooks(res.data.items);
        setLoader(false); // remove the loader once it finds results
      })
      // Will output an error.
      .catch(() => {
        setShowModal(true);
        if (value === "") {
          setMessage("Cannot enter an empty search.");
          setLoader(false);
          // modalClosed: false,
        } else {
          setBooks([]);
          setLoader(false);
          setMessage("We apologize.. No books found, try a different search");
        }
      });
  };

  const saveBookHandler = (id) => {
    const book = books.find((book) => book.id === id);

    const foundResults = {
      id: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    };

    // Saving all books contents to the database
    API.saveBook(foundResults)
      .then(() => {
        setShowModal(true);
        setMessage("Your book is now saved. Go to your Saved page to view!");
      })
      .catch(() => {
        setShowModal(true);
        setMessage("You already saved this book.");
      });
  };

  // Closing the Modal once the user clicks anywhere besides the modal
  const modalClosedHanlder = () => setShowModal(false);

  let booksResult = null;
  if (books.length > 0) {
    booksResult = (
      <BookList>
        {books.map((book) => {
          return (
            <BookDetails
              // Getting books with the same IDs. If they have the same ID then give book.etag as a second ID.
              key={book.id ? book.etag : null}
              authors={
                book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : null
              }
              title={book.volumeInfo.title}
              synopsis={
                book.volumeInfo.description ? book.volumeInfo.description : null
              }
              link={book.volumeInfo.infoLink}
              thumbnail={
                book.volumeInfo.imageLinks === undefined
                  ? null
                  : book.volumeInfo.imageLinks.thumbnail
              }
              booksBtnHandler={() => saveBookHandler(book.id)}
              name="Save Book"
              btnType={"SaveBtn"}
            />
          );
        })}
      </BookList>
    );
  }

  if (loader) {
    booksResult = <Spinner />;
  }

  return (
    <Container>
      <Row>
        <Jumbotron />
      </Row>
      <Row>
        <InputSearch searchGoogleBooks={searchGoogleBooks} />
      </Row>
      <Modal show={showModal} modalClosed={modalClosedHanlder}>
        <h3>{message}</h3>
      </Modal>
      <Row>{booksResult}</Row>
    </Container>
  );
};

export default SearchBooks;
