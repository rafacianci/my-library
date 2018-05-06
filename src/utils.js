import React from 'react';

let totalItensPerPage = 10;

export const changePageItens = itens => totalItensPerPage = itens

const getStartPage = (totalPages, currentPage) => {
  if ((currentPage - 3) <= 0 || totalPages < 5) {
    return 1;
  }

  if ((currentPage + 2) > totalPages) {
    return totalPages - 4;
  }

  return currentPage - 2;
};

const getLastPage = (totalPages, currentPage) => {
  if (totalPages <= 5 || (currentPage + 3) > totalPages) {
    return totalPages;
  }

  if ((currentPage - 3) <= 0) {
    return 5;
  }

  return currentPage + 2;
};

const getPaginationCollection = (totalPages, currentPage) => {
  let page = getStartPage(totalPages, currentPage);
  const lastPage = getLastPage(totalPages, currentPage);
  const pageCollection = [];

  for (; page <= lastPage; page += 1) {
    pageCollection.push(page);
  }

  return pageCollection;
};

export const getPaginationConfig = (totalBooks, currentPage = 0) => {
  const pages = Math.ceil(totalBooks / totalItensPerPage);

  const active = currentPage > pages ? 0 : currentPage

  return {
    active,
    total: pages,
    collection: getPaginationCollection(pages, active),
  };
};

export const highlightSearch = (text, search = '') => {
  if (!text || !search) {
    return text;
  }

  const arr = text.toLowerCase().split(search.toLowerCase());

  return arr.map((arg, index) => {
    if (index === 0) {
      return <span>{arg}</span>;
    }

    return <span><mark>{search}</mark>{arg}</span>;
  });
};

export const LocalStorage = {
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  get: key => JSON.parse(window.localStorage.getItem(key)),
  remove: (key) => window.localStorage.removeItem(key),
};

export default {
  LocalStorage,
  getPaginationConfig,
};
