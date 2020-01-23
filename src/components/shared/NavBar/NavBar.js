import React from 'react';
import {
  Nav, NavItem, NavLink, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const navBuilder = () => {
      if (authed) {
        return (
        <Nav>
          <NavItem>
            <NavLink href="#">Pictures</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Schedule</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <Button color="primary" onClick={this.logMeOut}>Log Me Out</Button>
          </NavItem>
        </Nav>
        );
      }
    };
    return (
    <div>
      { navBuilder() }
      <hl />
    </div>
    );
  }
}

export default NavBar;
