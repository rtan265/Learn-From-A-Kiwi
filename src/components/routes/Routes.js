import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import Explore from '../explore/Explore';
import Instructors from '../instructors/Instructors';
import SignIn from '../signIn/SignIn';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/learnFromAKiwi" component={ LandingPage } exact/>
                <Route path="/learnFromAKiwi/explore" component={ Explore } exact/>
                <Route path="/learnFromAKiwi/instructors" component={ Instructors } exact/>
                <Route path="/learnFromAKiwi/signin" component={ SignIn } exact/>
            </Switch>
            // working?
        );
    }
}

export default Routes;