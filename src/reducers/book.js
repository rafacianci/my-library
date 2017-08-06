import {
  GET_BOOKS_SUCCESS,
  GET_DETAIL_BOOK_SUCCESS,
  GET_DETAIL_BOOK_FETCH,
} from '../actions/types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  if (action.type === GET_BOOKS_SUCCESS) {
    return {
      ...state,
      data: action.payload.items,
      total: action.payload.totalItems,
    };
  }

  if (action.type === GET_DETAIL_BOOK_SUCCESS) {
    return {
      ...state,
      detailed: action.payload,
    };
  }

  if (action.type === GET_DETAIL_BOOK_FETCH) {
    return {
      ...state,
      detailed: null,
    };
  }

  return state;
};
