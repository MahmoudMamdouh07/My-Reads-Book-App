import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import Shelf from "./Shelf";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  shelfUpdate = (book, shelf) => {
    const { books } = this.state;
    const bookIndex = books.findIndex((b) => b.id === book.id);
    books[bookIndex].shelf = shelf;

    this.setState({
      books: [
        ...books.slice(0, bookIndex),
        books[bookIndex],
        ...books.slice(bookIndex + 1),
      ],
    });

    BooksAPI.update(book, shelf);
  };
  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={({ history }) => (
            <ListBooks
              shelfUpdate={this.shelfUpdate}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf
                  books={this.state.books}
                  shelfUpdate={this.shelfUpdate}
                />
              </div>
              <div className="open-search">
                <Link id="open-search-link" to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
