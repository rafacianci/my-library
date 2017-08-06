import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/book';

class SearchBooks extends Component {
  handleChangeSearch(search) {
    this.setState({
      search,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getBooks(this.state.search);
  }

  render() {
    return (
      <div className='filter'>
        <form onSubmit={(e) => this.handleSubmit(e)} className='field has-addons'>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Pesquisar'
              onChange={(event) => this.handleChangeSearch(event.target.value)}
            />
          </div>
          <div className='control'>
            <button className='button' type='submit'>
              <svg style={{ width: 22, height: 22 }} viewBox='0 0 24 24'>
                <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59
                14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41
                11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7
                5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  getBooks,
})(SearchBooks);