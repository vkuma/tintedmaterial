
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../actions/userActions'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/user/login' />
    )} />
)

export default PrivateRoute;