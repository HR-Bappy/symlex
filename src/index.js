import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 import { HashRouter } from 'react-router-dom'
 import {hashHistory } from 'react-router'
 import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router  } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>


  <BrowserRouter>
  <Router  basename="/"  history={hashHistory} >
    <App />
    </Router>
  </BrowserRouter>


 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
