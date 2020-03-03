import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import Search from './Search';
import Shelves from './Shelves';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={(() => (<Shelves/>))}/>

        <Route exact path='/search' render={(() => (<Search/>))}/>

      </div>
    )
  }
}

export default BooksApp