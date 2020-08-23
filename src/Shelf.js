import React, { Component } from "react";
import Book from "./Book";

const controls = [
  { name: "Currently Reading", shelf: "currentlyReading" },
  {
    name: "Want to Read",
    shelf: "wantToRead",
  },
  { name: "Read", shelf: "read" },
];

class Shelf extends Component {
  render() {
    const { books, shelfUpdate } = this.props;
    return controls.map((control) => (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{control.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === control.shelf)
              .map((book) => (
                <li key={book.title}>
                  <Book
                    controls={controls}
                    book={book}
                    shelfUpdate={shelfUpdate}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    ));
  }
}

export default Shelf;
