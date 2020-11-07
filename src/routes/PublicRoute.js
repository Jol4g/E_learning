
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, path, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} path={path} render={props => (
            true && restricted ? // auth.type ? <Redirect to="/:id/teacher" /> :
                <Redirect to="/:id/courses" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;