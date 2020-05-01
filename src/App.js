import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Routes from './components/routes/Routes';
import './App.css';

class App extends React.Component {
  render() {
    const { location } = this.props
    return (
        <main className="App">
          {/* {
            location.pathname !== "/" && <Navigation />
          } */}
          <Navigation />
          <Routes />
        </main>
    );
  }
}

export default withRouter(App);