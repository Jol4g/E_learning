import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

const PrivateRoute = ({user,component: Component, ...rest}) => {

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.isAdmin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;