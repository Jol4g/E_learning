import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const StudentRoute = ({user,component: Component, ...rest}) => {
    const [User, setuser] = useState({})
    useEffect(() => {
      let id= localStorage.getItem('id')
      let type=  localStorage.getItem('type')
      setuser({id:id,type:type})
    }, [])
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            User && User.type === 'student' ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

const mapStateToProps = (state) => {
    
  console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(StudentRoute);