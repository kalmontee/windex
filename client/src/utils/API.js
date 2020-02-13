import axios from 'axios';

// const BASEURL = "https://www.googleapis.com/books/v1";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyAmDKuFgCXdea2kPgyZlO3hWWDzVE0-Z0o";

export default {
    search: (query) => axios.get(BASEURL + query + APIKEY),
    getBooks: () => axios.get("/api/books"),
    getBook: (id) => axios.get("/api/books/" + id),
    deleteBook: (id) => axios.delete("/api/books", id),
    // saveBook: () => axios.post("/api/books", bookData)
}