import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Nav } from '../components';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const CustomRoute: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, logout } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            {user && <Nav handleClick={() => logout()} />}
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
