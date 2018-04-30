
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class ListBook extends Component {

  filterByStatus(status, list) {
    if (list != undefined){
      const filteredBooks = list.filter((book) => book.shelf == status )
      return filteredBooks 
    }
  }

  render() {
    const currentlyReading = this.filterByStatus('currentlyReading', this.props.books)
    const read = this.filterByStatus('read', this.props.books)
    const wantToRead = this.filterByStatus('wantToRead', this.props.books)
    const { onUpdateShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { currentlyReading && 
                  (currentlyReading.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateShelf(event.target.id, event.target.value) } id={book.id} >
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(' , ')}</div>
                    </div>
                  </li>
                  )))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { wantToRead && 
                  (wantToRead.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf}  onChange={(event) => onUpdateShelf(event.target.id, event.target.value)} id={book.id} >
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(' , ')}</div>
                    </div>
                  </li>
                  )))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { read && 
                  (read.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => onUpdateShelf(event.target.id, event.target.value)} id={book.id} >
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(' , ')}</div>
                    </div>
                  </li>
                  )))
                  }
                </ol>

              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"
          >
            Add a book
          </Link>
        </div>
      </div>

    );
  }
}
export default ListBook 
