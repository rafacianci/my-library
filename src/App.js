import React from 'react';
import 'bulma/css/bulma.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import './App.css';
import Books from './containers/Books';
import BookDetail from './containers/BookDetail';
import SearchBooks from './components/SearchBooks';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

const App = () => (
  <Router>
    <Provider store={store}>
      <div className='App'>
        <header>
          <nav className='App-header container'>
            <h1>Test</h1>
            <SearchBooks />
          </nav>
        </header>
        <Route exact path='/' component={Books} />
        <Route path='/book/:bookId' component={BookDetail} />
      </div>
    </Provider>
  </Router>
);

export default App;
