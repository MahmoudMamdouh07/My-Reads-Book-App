import React, { Component } from "react";
import Selections from "./Selections";
import missing from "./icons/missing.png";

class Book extends Component {
  render() {
    const { controls, book, shelfUpdate } = this.props;
    const image =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : missing;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`,
            }}
          />
          <Selections
            book={book}
            controls={controls}
            shelfUpdate={shelfUpdate}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
