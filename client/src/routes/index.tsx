import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../containers/login';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);
