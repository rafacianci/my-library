import React from 'react';
import './style.css';

const Pagination = ({ config, onChangePage }) => (
  <div className='pagination'>
    <button
      type='button'
      className='pag-btn'
      data-tag='previous'
      disabled={config.active === 1}
      onClick={() => onChangePage(config.active - 1)}
    >
      «
    </button>
    {
      config.collection.map((page) => (
        <button
          key={page}
          type='button'
          className='pag-btn'
          data-tag={`page_${page}`}
          disabled={config.active === page}
          onClick={() => onChangePage(page)}
        >
          {page}
        </button>
      ))
    }
    <button
      type='button'
      className='pag-btn'
      data-tag='next'
      disabled={config.active === config.total}
      onClick={() => onChangePage(config.active + 1)}
    >
      »
    </button>
  </div>
);

export default Pagination;
