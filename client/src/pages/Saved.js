import React, { useState, useEffect } from "react";

import { Container, Row } from "../components/Grid/index";
import Jumbotron from "../components/UI/Jumbotron/Jumbotron";
import BookDetails from "../components/Books/BookDetails/BookDetails";
import BookList from "../components/Books/BookDetails/BookList/BookList";
import Spinner from "../components/UI/Spinner/Spinner";
import API from "../utils/API";
import Modal from "../components/UI/Modal/Modal";

const SavedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoader(true);
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
        setLoader(false);
      })
      .catch(() => setError("Cannot retrieve current data.."));
  }, []);

  const deleteBookHandler = (id) => {
    API.deleteBook(id)
      .then(() => window.location.reload())
      .catch(() => setError("Cannot delete current book.."));
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
               key={book._id}
               authors={book.authors.join(", ")}
               title={book.title}
               synopsis={book.description}
               link={book.link}
               thumbnail={book.image}
               booksBtnHandler={() => deleteBookHandler(book._id)}
               name="Delete Book"
               btnType={"DeleteBtn"}
             />
           );
         })}
       </BookList>
     );
   } else {
     booksResult = (
       <h1 style={{ textAlign: "center", marginTop: "50px" }}>
         You don't have any books saved.
       </h1>
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
      <Modal show={showModal} modalClosed={modalClosedHanlder}>
        <h3>{error}</h3>
      </Modal>
      <Row>
        {booksResult}
      </Row>
    </Container>
  );
};

export default SavedBooks;
