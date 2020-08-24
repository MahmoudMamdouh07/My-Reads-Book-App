import React, { Component } from "react";

class Selections extends Component {
  render() {
    const { books, book, controls, shelfUpdate } = this.props;
    const isBookExists = (book) => {
      if (books.some((b) => b.id === book.id)) {
        return true;
      } else return false;
    };
    const bookFound = books[books.findIndex((b) => b.id === book.id)];
    return (
      <div className="book-shelf-changer">
        <select
          onChange={(event) => shelfUpdate(book, event.target.value)}
          value={
            /*isBookExists(book)
              ? books.findIndex((b) => b.id === book.id).shelf
              : "none"*/
            book.shelf
              ? book.shelf
              : isBookExists(book)
              ? bookFound.shelf
              : "none"
          }
          //book.shelf ? book.shelf : "none"
        >
          <option value="move" disabled>
            Move to...
          </option>
          {controls.map((control) => (
            <option value={control.shelf}>{control.name}</option>
          ))}

          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Selections;
