import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import Explore from '../explore/Explore';
import Instructors from '../instructors/Instructors';
import SignIn from '../signIn/SignIn';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ LandingPage } />
                <Route path="/explore" component={ Explore } />
                <Route path="/instructors" component={ Instructors } />
                <Route path="/signin" component={ SignIn } />
            </Switch>
        );
    }
}

export default Routes;