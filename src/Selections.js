import React, { Component } from "react";

class Selections extends Component {
  render() {
    const { book, controls, shelfUpdate } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          onChange={(event) => shelfUpdate(book, event.target.value)}
          value={book.shelf ? book.shelf : "none"}
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
