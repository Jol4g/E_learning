import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

const TeacherRoute = ({user,component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.isTeacher() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default TeacherRoute;