import axios from 'axios';

// const BASEURL = "https://www.googleapis.com/books/v1";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyAmDKuFgCXdea2kPgyZlO3hWWDzVE0-Z0o";

export default {
  search: (query) => axios.get(BASEURL + query + APIKEY),

  getBooks: () => axios.get("/api/books"),

  getBook: (id) => axios.get("/api/books/" + id),

  // Deletes the saved book with the given id
  deleteBook: (id) => axios.delete("/api/books/" + id),
  
  // Saves an book to the database
  saveBook: (bookData) => axios.post("/api/books", bookData)
}