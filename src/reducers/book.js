import {
  GET_BOOKS_SUCCESS,
  GET_DETAIL_BOOK_SUCCESS,
  GET_DETAIL_BOOK_FETCH,
  CHANGE_BOOK_FAVORITE,
} from '../actions/types';
import { LocalStorage } from '../utils';

const localFavorites = LocalStorage.get('favorites');

const initialState = {
  data: [],
  favorites: localFavorites || [],
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

  if (action.type === CHANGE_BOOK_FAVORITE) {
    let favorites;
    if (action.payload.isFavorite) {
      favorites = [
        ...state.favorites,
        action.payload.id,
      ];

      LocalStorage.set('favorites', favorites);
      return {
        ...state,
        favorites,
      };
    }

    favorites = state.favorites.filter((favoriteId) => favoriteId !== action.payload.id);

    LocalStorage.set('favorites', favorites);
    return {
      ...state,
      favorites: state.favorites.filter((favoriteId) => favoriteId !== action.payload.id),
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
