# 📚 Virtual G-Books

![Screenshot (176)](https://user-images.githubusercontent.com/52462582/80656735-e2c78f00-8a4f-11ea-8892-07fa6827025b.png)

## ✨ Project Overview

This is a **React-based Google Books Search application** that allows users to find books, view details, and save their favorites for later review or purchase. It offers a clean, modern interface for managing your reading list.

---

## 🚀 Features

* **Search Functionality:** Users can search for any book by title, author, or keyword using the integrated [Google Books API](https://developers.google.com/books/).
* **Detailed Book View:** Easily access detailed information for any search result, including the description, publication date, and author(s).
* **Persistent Storage:** Users can **save books** to a personal reading list stored in a MongoDB database for later reference.
* **External Link:** Provides a direct link to the **official Google Books page** for purchasing or reviewing the book externally.
* **Responsive Design:** A seamless experience across different devices.

---

## 🖥️ Instructions & Usage

Getting started with Virtual G-Books is simple:

1.  **Search:** Use the search bar to enter the title, author, or topic of the book you are looking for.
2.  **View Details:** Click on the book title or thumbnail to see the description and other relevant information.
3.  **Manage Your Reading List:**
    * Click the **`Save Book`** button to add the book to your Favorites list, which is persistently stored in the database.
    * Click the **`Go to Book`** button to be redirected to the book's official page on Google Books.

---

## 🛠️ Technology Stack (MERN)

This application is built using the **MERN Stack** (MongoDB, Express, React, Node.js) and follows the **Model-View-Controller (MVC)** architectural design pattern.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Database** (Model) | **MongoDB / Mongoose** | A NoSQL database for saving and retrieving favorite books. **Mongoose** is used for object data modeling. |
| **Backend** (Controller) | **NodeJS / Express** | The runtime environment and a minimalist framework for handling API routes and server logic. |
| **Frontend** (View) | **React / React-Router** | A powerful JavaScript library for building the user interface. **React-Router** manages client-side navigation. |
| **API** | **Google Books API** | The third-party API used to fetch book data based on user search queries. |
| **Other** | **Axios / CSS Modules** | **Axios** is used for promise-based HTTP requests. **CSS Modules** for component-scoped styling. |

---

## 🌐 Demo

* **Live Application:** [virtualgbooks.herokuapp.com](https://virtualgbooks.herokuapp.com/)

---

## ✍️ Author

Kelvin Almonte
