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
  state = {
    query: "",
  };
  handleSearch = (event) => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  };
  render() {
    const { books, shelfUpdate } = this.props;
    const { query } = this.state;
    function getAuthor(author) {
      return author.toLowerCase().includes(query.toLowerCase());
    }
    const showingBooks =
      query === ""
        ? books
        : books.filter(
            (book) =>
              book.title.toLowerCase().includes(query.toLowerCase()) ||
              book.authors.some(getAuthor)
          );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={this.handleSearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {showingBooks.length !== books.length ? (
            <ol className="books-grid">
              {showingBooks.map((book) => (
                <Book
                  controls={controls}
                  book={book}
                  shelfUpdate={shelfUpdate}
                />
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ListBooks;
