import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Container from '../components/Container/Container';
// import Card from '../components/Card/Card';
import BookDetails from '../components/BookDetails/BookDetails';
import { Input } from '../components/Form';
import API from "../utils/API";

class Search extends Component {
    state = {
        result: {},
        query: "",
        books: []
    }

    displayRes = (data) => {
        this.setState({ books: data.items })
    }

    searchGoogleBooks = (query) => {
        API.search(query)
            .then(res => {
                console.log(res.data.items);
                this.setState({ result: res.data.items })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };

    searchBooksHandler = () => {
        this.searchGoogleBooks(this.state.search);
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Input
                    value={this.state.value}
                    handleInputChange={this.handleInputChange}
                    searchBooksHandler={this.searchBooksHandler}
                />

                {(this.state.books && this.state.books.length > 0) ?
                    <Container>
                        {this.state.books.map(book => {
                            return (
                                <BookDetails
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors ? book.volumeInfo : ["No Author Available"]}
                                    description={book.volumeInfo.description ? book.volumeInfo.description : "No Description Available"}
                                    link={book.volumeInfo.infoLink}
                                    thumbnail={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}
                                />
                            )
                        })}
                    </Container>
                    :
                    "Nothing to Display..."
                }
            </div>
        )
    }
}

export default Search;