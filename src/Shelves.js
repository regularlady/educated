import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Shelves extends Component {

    updateShelves = () => {
        // Update the state of the individual shelves to contain the appropriate books
        // for each
        const newCurrent = {
            name: "Currently Reading",
            books: this
                .props
                .books
                .filter(book => book.shelf === 'currentlyReading')
        };
        const newWant = {
            name: "Want to Read",
            books: this
                .props
                .books
                .filter(book => book.shelf === "wantToRead")
        };
        const newRead = {
            name: "Read",
            books: this
                .props
                .books
                .filter(book => book.shelf === "read")
        };

        return ([newCurrent, newWant, newRead]);
    }

    render = () => {
        let shelves = [];
        if (this.props.books && this.props.books.length) 
            shelves = this.updateShelves();
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                          {shelves && shelves.map((shelf) => (<Bookshelf key={shelf.name} shelf={shelf}/>))}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelves; 