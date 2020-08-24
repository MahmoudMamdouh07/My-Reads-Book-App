import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import Shelf from "./Shelf";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchableBooks: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  searchQuery = (query) => {
    BooksAPI.search(query).then((searchableBooks) => {
      if (query !== "") {
        try {
          this.setState({ searchableBooks });
        } catch (e) {}
      } else {
        this.setState({ searchableBooks: [] });
      }
    });
  };
  shelfUpdate = (book, shelf) => {
    const { books } = this.state;
    if (!books.includes(book)) {
      books.push(book);
    }
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
        <BrowserRouter>
          <Switch>
            <Route
              path="/search"
              render={({ history }) => (
                <ListBooks
                  shelfUpdate={this.shelfUpdate}
                  searchQuery={this.searchQuery}
                  Books={this.state.searchableBooks}
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
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
