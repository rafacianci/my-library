import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Welcome to React</h2>
    </div>
    <p className='App-intro'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
