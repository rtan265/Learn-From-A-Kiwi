import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import Explore from '../explore/Explore';
import Instructors from '../instructors/Instructors';
import SignIn from '../signIn/SignIn';

class Routes extends React.Component {
    render() {
        return (
            // <Switch>
            //     <Route path="/" component={ LandingPage } exact/>
            //     <Route path="/explore" component={ Explore } exact/>
            //     <Route path="/instructors" component={ Instructors } exact/>
            //     <Route path="/signin" component={ SignIn } exact/>
            // </Switch>
            <Switch>
            <Link to = "learnFromAKiwi/" component = { LandingPage } />
            <Link to = "learnFromAKiwi/explore" component = { Explore } />
            <Link to = "learnFromAKiwi/instructors" component = { Instructors } />
            <Link to = "learnFromAKiwi/signin" component = { SignIn } />
            </Switch>
        );
    }
}

export default Routes;