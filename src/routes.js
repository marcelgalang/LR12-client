import React from 'react';
import { Route } from 'react-router';
import App from './App';

import UserPage from './components/users/UserPage';


export default (
  <Route path="/users" component={UserPage}>
    <Route path="/users" component={UserPage} />
  </Route>
);