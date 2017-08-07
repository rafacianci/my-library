import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks, changeFavorite } from '../../actions/book';
import './style.css';

class Books extends Component {
  componentWillMount() {
    this.props.getBooks();
  }

  handleFavorite(event, bookId, bool) {
    event.preventDefault();

    this.props.changeFavorite(bookId, bool);
  }

  showFavorite(bookId) {
    if (this.props.book.favorites.findIndex((id) => id === bookId) >= 0) {
      return (
        <button
          onClick={(e) => this.handleFavorite(e, bookId, false)}
          type='button'
          className='favorite-button'
        >
          <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
            <path
              d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62
              L2,9.24L7.45,13.97L5.82,21L12,17.27Z'
            />
          </svg>
        </button>
      );
    }

    return (
      <button
        onClick={(e) => this.handleFavorite(e, bookId, true)}
        type='button'
        className='favorite-button'
      >
        <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
          <path
            d='M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,
              10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19
              ,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24
              Z'
          />
        </svg>
      </button>
    );
  }

  render() {
    return (
      <div className='container'>
        <div className='list'>
          <h2 className='page-title'>Books</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Publisher</th>
                <th>Published</th>
                <th>Favorite</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.book.data.map((book) => (
                  <Link key={book.id} to={`/book/${book.id}`} className='edit-link'>
                    <td>
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={book.volumeInfo.title}
                      />
                    </td>
                    <td className='book-description'>
                      <b>{ book.volumeInfo.title }</b>
                      <p>{ book.volumeInfo.description }</p>
                    </td>
                    <td>{ book.volumeInfo.publisher }</td>
                    <td>{ book.volumeInfo.publishedDate }</td>
                    <td>
                      { this.showFavorite(book.id) }
                    </td>
                  </Link>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateProps = ({ book }) => ({
  book,
});

export default connect(mapStateProps, {
  getBooks,
  changeFavorite,
})(Books);
