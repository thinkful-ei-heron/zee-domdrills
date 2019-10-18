import React from 'react'
import Form from './Form'
import List from './List'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class App extends React.Component {
  state = {
    books: [],
    openBook: null,

    query: '', // search term
    printType: 'all', // all, books, or magazines
    bookType: 'all', // type of book

    loading: false,
    error: null
  }

  searchChanged = query => {
		this.setState({
			query
		});
	}

	printChanged = printType => {
		this.setState({
      printType
		});
  }
  
  bookChanged = bookType => {
		this.setState({
      bookType
		});
	}

  // Search function called by sumbitting search form
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      loading: true // activate loading indicator
    });

    let query = this.state.query;
    let printType = this.state.printType;
    let bookType = this.state.bookType;
    if (bookType === 'all') {bookType = ''} else bookType = `&filter=${bookType}`;

    fetch(`${BASE_URL}${query}&printType=${printType}${bookType}`)
      .then(res => res.json())
      .then(data => this.setState({
        books: data.items,
        loading: false // deactivate loading indicator
      }));
  }
  
  render() {
    return (
      <div className='app'>
        <Form
          search={this.state.query}
          printType={this.state.printType}
          handleSearch={this.handleSearch}
          searchChanged={this.searchChanged}
          printChanged={this.printChanged}
          bookChanged={this.bookChanged}
        />
        <List
          books={this.state.books}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
