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
    const { authed, userObj } = this.props;
    const navBuilder = () => {
      if (authed) {
        return (
        <Nav className="NavBar NavBarLinks">
          <h1 className="ml-0">
          <span><Link className="brandLogo" to="/"><i className="fas fa-camera-retro fa-3x"></i></Link></span>
          </h1>
          <NavItem>
            <Link className="nav-link NavBarLinks" to="/event/eventpictures">Pictures</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks" to="/event/new">Schedule</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks" to="/event">Events</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link NavBarLinks" to="/aboutus">About Us</Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link NavBarLinks greetings" to="/">Greetings: {userObj.displayName}</Link>
          </NavItem>
            <Button className="navbar-right logOutButton" onClick={this.logMeOut}>Log Out</Button>
        </Nav>
        );
      }
      return (<Nav className="NavBar NavBarLinks"></Nav>);
    };
    return (
    <div>
      { navBuilder() }
    </div>
    );
  }
}

export default NavBar;
