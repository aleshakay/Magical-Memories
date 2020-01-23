import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, NavItem, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './NavBar.scss';

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
        <Nav className="NavBar text-center">
          <NavItem>
            <Link className="nav-link NavBarLinks" to="/event/event123">Pictures</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks " to="event/new">Schedule</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks " to="/event">Events</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks " to="/aboutus">About Us</Link>
          </NavItem>
          <NavItem>
            <Button className="float-right logOutButton" onClick={this.logMeOut}>Log Out</Button>
          </NavItem>
        </Nav>
        );
      }
      return (<Nav className="NavBar text-center"></Nav>);
    };
    return (
    <div>
      { navBuilder() }
    </div>
    );
  }
}

export default NavBar;
