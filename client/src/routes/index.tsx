import React from 'react';
import { Switch } from 'react-router-dom';
import { Login, Home } from '../containers';
import { Route } from './Route';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} isPrivate />
  </Switch>
);
