import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Routes from './components/routes/Routes';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <main className="App">
          <Navigation />
          <Routes />
        </main>
    );
  }
}

export default withRouter(App);