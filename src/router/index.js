import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Loadable from 'react-loadable'

const Loading = () => (
    <div>Loading...</div>
)

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ 'pages/Home'),
    loading: Loading
})

const Page1 = Loadable({
    loader: () => import(/* webpackChunkName: "page1" */ 'pages/Page1'),
    loading: Loading
})

const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "counter" */ 'pages/Counter'),
    loading: Loading
})

const UserInfo = Loadable({
    loader: () => import(/* webpackChunkName: "userinfo" */ 'pages/UserInfo'),
    loading: Loading
})


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userInfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userInfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter
