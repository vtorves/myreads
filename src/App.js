import React, { Component } from 'react'
import { Link , Route} from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) =>{
      this.setState({ books: books })
    }) 
  }

  componentDidMount() {
    this.getAllBooks()
  }

  searchBook(query) {
    BooksAPI.search(query).then((books) => {
      this.setState({ result: books })
    })
  }

  updateShelf(book, shelf) {
    // self: "wantToRead", "currentlyReading", "read"
    let objBook = { id: book }
    BooksAPI.update(objBook, shelf).then((result) => {
    })
    this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook books={this.state.books}
            onUpdateShelf={(book, shelf) => {
              this.updateShelf(book, shelf)
            }}
          />
        )}
      />

    <Route path="/search" render={() => ( 
      <SearchPage 
        onSearchBook={(query) => {
          this.searchBook(query)
        }}
        onUpdateShelf={(book, shelf) => {
          this.updateShelf(book, shelf)
        }}
        result={this.state.result}/>
    )} />
      </div>
    )
  }
}

export default BooksApp
