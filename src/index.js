import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
import Movie from './Movie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Movie />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
