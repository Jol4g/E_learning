import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Course from './pages/Course'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import StudentRoute from './routes/StudentRoute'

export class App extends Component {
    render() {
        return (
            <Switch>
                <PublicRoute  exact path='/home' component={Home} />
                <PublicRoute  exact path='/'  component={Login} />
                <PublicRoute  exact path='/signup' component={Signup} />
                {/* Private Route */}
                <StudentRoute exact path='/:id/courses' component={Courses}/>
                <StudentRoute exact path='/:id/courses/:name' component={Course} />
                <StudentRoute exact path='/:id/courses/:name' component={Course} /> {/*Exam@*/}

                <Redirect  from='/logout' to='/' />
                <Route exact path='*' >
                    <h1>404</h1>
                </Route>
            </Switch>
        )
    }
}

export default App
