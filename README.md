# MyReads Project

My Reads Book APP project is a part of the final assessment for Udacity's React Nanodegree. The goal of this application is to track the books that are "Currently Reading", "Want to read", and "Already read"

Use create-react-app to bootstrap the project.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- install react's router with `npm install --save react-router-dom`
  ├── README.md - This file.
  ├── package.json # npm package manager file.
  ├── public
  │ ├── favicon.ico # React Icon
  │ └── index.html
  └── src
  ├── App.css # Styles for app
  ├── App.js # root of app that contains all routes and state
  ├── App.test.js # Used for testing
  ├── BooksAPI.js # Node.js Backend server API
  ├── Selections.js # given selections for a book whether to read, want to read, read or None
  ├── Book.js # Book component
  ├── ListBooks.js # Search component that contains searchable books
  ├── NotFound.js # 404 page display
  ├── Shelf.js # Shelf component that contains list of books
  ├── icons # Helpful images for your app. Use at your discretion.
  │ ├── add.svg
  │ ├── arrow-back.svg
  │ └── arrow-drop-down.svg
  │ └── missing.png # for books that are missing the cover
  │
  ├── index.css # Global styles. You probably won't need to change anything here.
  └── index.js # You should not need to modify this file. It is used for DOM rendering only.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
