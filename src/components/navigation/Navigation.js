import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import './Navigation.css';

const links = [
  { link: "/", text:"LandingPage" },
  { link: "/login", text:"Login" },
  { link: "/login", text:"About" },
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
  }

  closeNavbar() {
      if (this.state.collapsed !== true) {
        this.toggleNavbar();
      }
  }

  render() {
    console.log("hello from navigation");
    return (
      <div>
        <Navbar position="sticky" expand="lg" className="navbar sticky-top">
        <NavLink exact to="/">Learn From A Kiwi</NavLink>
          <NavbarToggler onClick={this.toggleNavbar} aria-controls="responsive-navbar-nav"></NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {
                links.map((objLink, i) => {
                  return (<NavItem><NavLink key={i} href={ objLink.link }>{ objLink.text }</NavLink></NavItem> )
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;