import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
// CSS
import 'antd/dist/antd.css';
import "./App.css"
import './pages/Login.css'

const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
    <Router>
    <App/>
    </Router>
    </Provider>
    ,document.getElementById("root")
)