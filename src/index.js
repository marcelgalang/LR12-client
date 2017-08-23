import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import {loadUsers} from './actions/userActions';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
 document.getElementById('root')
);
