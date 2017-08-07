const totalItensPerPage = 10;

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

export const getPaginationConfig = (totalBooks, active) => {
  const pages = Math.ceil(totalBooks / totalItensPerPage);

  return {
    active,
    total: pages,
    collection: getPaginationCollection(pages, active),
  };
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
