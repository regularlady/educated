import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import Search from './Search';
import Shelves from './Shelves';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    // Get the books currently on the bookshelves and update the state
    // with the returned list
    BooksAPI.getAll().then((list) => {
      this.setState({books: list});
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      // Grab a copy of the current books.
      const newList = this.state.books.slice(0);
      // Update the shelf with the book's shelf
      book.shelf = shelf;
      // Update the state
      this.setState({books: newList});
    })
  }

  render = () => {
    return (
      <div className="app">
        <Route exact path='/' render={(() => (<Shelves books={this.state.books} onChangeShelf={this.changeShelf}/>))}/>

        <Route exact path='/search' render={(() => (<Search/>))}/>

      </div>
    )
  }
}

export default BooksApp