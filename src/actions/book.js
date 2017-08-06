import axios from 'axios';
import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
} from './types';

export const getBooks = () => (dispatch) => (
  axios.get('volumes?q=a').then((result) => (
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
