import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks, changeFavorite } from '../../actions/book';
import SearchBooks from '../../components/SearchBooks';
import Pagination from '../../components/Pagination';
import GetImage from '../../components/GetImage';
import GetFavorite from '../../components/GetFavorite';
import { getPaginationConfig } from '../../utils';
import './style.css';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
    };
  }

  componentWillMount() {
    this.props.getBooks();
  }

  handleFavorite(event, bookId, bool) {
    event.preventDefault();

    this.props.changeFavorite(bookId, bool);
  }

  hanglePageChange(activePage) {
    this.props.getBooks(this.state.search, activePage);
    this.setState({
      activePage,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.props.getBooks(this.state.search);
  }

  handleChangeSearch(search) {
    this.setState({
      search,
    });
  }

  render() {
    const config = getPaginationConfig(this.props.book.total, this.state.activePage);
    return (
      <div className='container'>
        <div className='list'>
          <h2 className='page-title'>
            Books
            <SearchBooks
              onSubmit={(event) => this.handleSearchSubmit(event)}
              onChange={(value) => this.handleChangeSearch(value)}
            />
          </h2>
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
                      <GetImage
                        images={book.volumeInfo.imageLinks}
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
                      <GetFavorite
                        bookId={book.id}
                        favorites={this.props.book.favorites}
                        onChange={(event, id, bool) => this.handleFavorite(event, id, bool)}
                      />
                    </td>
                  </Link>
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination
          config={config}
          onChangePage={(activePage) => this.hanglePageChange(activePage)}
        />
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
