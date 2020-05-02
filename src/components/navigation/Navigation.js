import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Navigation.css';

const links = [
  { link: "/explore", text:"Explore" },
  { link: "/instructors", text:"Instructors" },
  { link: "/signin", text:"Sign in" }
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
    return (
      <div>
        <Navbar position="sticky" expand="lg" dark className="navbar sticky-top">
        <NavbarBrand className="link" exact href="/">LearnFromA.Kiwi</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-auto">
              {
                links.map((objLink, i) => {
                  return (<NavItem><Link to={ objLink.link } className="link" key={i}>{ objLink.text }</Link></NavItem> )
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