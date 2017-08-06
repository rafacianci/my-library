import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/book';
import './style.css';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div className='container'>
        <div className='list'>
          <h1 className='page-title'>Books</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Publisher</th>
                <th>Published</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.book.data.map((book) => (
                  <Link key={book.id} to={`/${book.id}`} className='edit-link'>
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
                    <td><a href={book.selfLink} target='_blank'>Buy</a></td>
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
})(Books);
