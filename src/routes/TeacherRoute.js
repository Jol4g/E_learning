import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const TeacherRoute = ({user,component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            true  && user.type === 'teacher' ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
    }
export default connect(mapStateToProps)(TeacherRoute);