import axios from 'axios';
import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_DETAIL_BOOK_FETCH,
  GET_DETAIL_BOOK_SUCCESS,
  GET_DETAIL_BOOK_ERROR,
} from './types';

export const getBooks = (search = 'a') => (dispatch) => (
  axios.get(`volumes?q=${search}`).then((result) => (
    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: result.data,
    })
  ), (error) => (
    dispatch({
      type: GET_BOOKS_ERROR,
      payload: error,
    })
  ))
);

export const getBookDetail = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAIL_BOOK_FETCH,
  });
  axios.get(`volumes/${id}`).then((result) => (
    dispatch({
      type: GET_DETAIL_BOOK_SUCCESS,
      payload: result.data,
    })
  ), (error) => (
    dispatch({
      type: GET_DETAIL_BOOK_ERROR,
      payload: error,
    })
  ));
};
