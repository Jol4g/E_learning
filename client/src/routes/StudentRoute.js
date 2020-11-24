import Axios from 'axios';
import React
// ,{ useEffect, useState }
 from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Route, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

const StudentRoute = ({component: Component,user, ...rest}) => {

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.isUser() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default StudentRoute;