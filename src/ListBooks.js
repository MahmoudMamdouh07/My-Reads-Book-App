import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const controls = [
  { name: "Currently Reading", shelf: "currentlyReading" },
  {
    name: "Want to Read",
    shelf: "wantToRead",
  },
  { name: "Read", shelf: "read" },
];

class ListBooks extends Component {
  render() {
    const { Books, searchQuery, shelfUpdate } = this.props;
    /*  function getAuthor(author) {
      return author.toLowerCase().includes(query.toLowerCase());
    }*/
    const showingBooks = Books;
    /*   query === ""
        ? books
        : searchQuery.filter(
            (book) =>
              book.title.toLowerCase().includes(query.toLowerCase()) ||
              book.authors.some(getAuthor)
          );*/
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input // not adding value property setted to {query} in input state leads to faster and better performance
              type="text"
              onChange={(event) => {
                searchQuery(event.target.value);
              }}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks && showingBooks.length > 0
              ? showingBooks.map((book) => (
                  <Book
                    controls={controls}
                    book={book}
                    shelfUpdate={shelfUpdate}
                  />
                ))
              : null}
          </ol>
        </div>
      </div>
    );
  }
}

export default ListBooks;
