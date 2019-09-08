// routes.js
import React from 'react';
import { Router, Route } from 'react-router';
import Login from './containers/Login/index';
import Home from './containers/Home/index';
import Header from './containers/Header/index';
import TestIonic from './ionic/ionicTest';
import { store, history } from './store';

const userAuthentication = store.getState().UserValidate.userAuthentication;

function requireAuth() {
    if (userAuthentication !== 'success') {
        history.push('/');
    }
}

function AppRoute() {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} onEnter={requireAuth()} />
            </div>
        </Router>
    );
}

export default AppRoute;
