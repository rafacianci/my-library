import {
  GET_BOOKS_SUCCESS,
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

  return state;
};
