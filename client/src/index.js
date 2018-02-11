import '../src/styles/css/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import AppRouter from'./router/routes';
import reducers from './reducers';

// dev only
import axios from 'axios';
window.axios = axios;

// store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {},composeEnhancers(applyMiddleware(reduxThunk, promise)),
);

ReactDOM.render(
 <Provider store={store}><AppRouter /></Provider>, 
 document.querySelector('#root'));

//  console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
//  console.log('Enviroment is', process.env.NODE_ENV);