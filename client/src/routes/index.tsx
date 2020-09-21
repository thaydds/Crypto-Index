import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Home, Update } from '../containers';
import { CustomRoute } from './Route';

export const Routes = () => (
  <Switch>
    <CustomRoute path="/" exact component={Login} />
    <CustomRoute path="/home" exact component={Home} isPrivate />
    <CustomRoute path="/update" exact component={Update} isPrivate />
    <Route path="/" component={() => <h1>Página não existe</h1>} />
  </Switch>
);
