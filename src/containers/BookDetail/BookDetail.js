import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBookDetail } from '../../actions/book';
import './style.css';

const renderBookDetail = (book) => {
  if (!book) {
    return (
      <p className='content'>Loading...</p>
    );
  }

  return (
    <div className='content'>
      <h2 className='page-title'>{book.volumeInfo.title}</h2>
      <div className='authors'>
        <b>Authors: </b>
        {
          book.volumeInfo.authors.map((author) => (
            <span key={author} className='author'>{author}</span>
          ))
        }
      </div>
      <p><b>Publisher: </b>{book.volumeInfo.publisher}</p>
      <p><b>Description: </b>{book.volumeInfo.description}</p>
    </div>
  );
};

class BookDetail extends Component {
  constructor(props) {
    super(props);

    if (props.match.params && props.match.params.bookId) {
      props.getBookDetail(props.match.params.bookId);
    }
  }

  render() {
    const { book } = this.props;
    return (
      <div className='container book-detail'>
        { renderBookDetail(book) }
      </div>
    );
  }
}

const mapStateProps = ({ book }) => ({
  book: book.detailed,
});

export default connect(mapStateProps, {
  getBookDetail,
})(BookDetail);
