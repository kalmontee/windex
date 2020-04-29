import React, { Component } from 'react';

import { Container } from '../components/Grid/index';
import BookDetails from '../components/Books/BookDetails/BookDetails';
import BookList from '../components/Books/BookDetails/BookList/BookList';
import Spinner from '../components/UI/Spinner/Spinner';
import API from '../utils/API';

class SavedBooks extends Component {
   state = {
      allBooks: [],
      loader: false,
      error: ""
   }

   // componentDidAmount will automatically fetch data from the server
   componentDidMount = () => {
      // Initialize the loader
      this.setState({ loader: true });
      // Calling API.getBooks function to make a request to the server
      API.getBooks()
         .then(res => this.setState({ allBooks: res.data, loader: false }))
         .catch(err => this.setState({ error: err }));
   }

   deleteBookHandler = (id) => {
      API.deleteBook(id)
         .then(this.setState({ err: alert("Successful!") }))
         .then(res => this.componentDidMount())
         .catch(err => console.log(err));
   }

   render() {
      let booksResult = null;
      if (this.state.allBooks.length > 0) {
         booksResult = (
            <BookList>
               {this.state.allBooks.map(book => {
                  return (
                     <BookDetails
                        key={book._id}
                        authors={book.authors.join(', ')}
                        title={book.title}
                        synopsis={book.description}
                        link={book.link}
                        thumbnail={book.image}
                        booksBtnHandler={() => this.deleteBookHandler(book._id)}
                        name="Delete Book"
                        btnType={"DeleteBtn"}
                     />
                  )
               })}
            </BookList>
         );
      } else {
         booksResult = <h1 style={{textAlign: 'center', marginTop: '50px'}}>You don't have any books saved.</h1>
      }
      
      if (this.state.loader) {
         booksResult = <Spinner />
      }
      
      return (
         <Container>
            {booksResult}
         </Container>
      )
   }
}

export default SavedBooks;
