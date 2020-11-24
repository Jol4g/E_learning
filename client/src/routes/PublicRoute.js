
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

const PublicRoute = ({component: Component, restricted, path, ...rest}) => {


    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} path={path} render={props => (
            auth.isAuthenticated() && restricted ? // auth.type ? <Redirect to="/:id/teacher" /> :
              auth.isUser() ?  <Redirect to="/profile" /> :
               auth.isAdmin() ?  <Redirect to="/admin" /> : 
               auth.isTeacher() ?  <Redirect to="/teacher" /> : null
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;