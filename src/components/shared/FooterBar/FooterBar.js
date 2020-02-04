import React from 'react';
import {
  Nav, NavItem, NavLink,
} from 'reactstrap';
import './FooterBar.scss';

class FooterBar extends React.Component {
  render() {
    const { authed } = this.props;

    const footerBuilder = () => {
      if (authed) {
        return (
        <Nav className="footerLinks text-center">
          <NavItem>
            <NavLink className="nav-link footerLinks" href="https://www.facebook.com/aleshar"><i className="fab fa-facebook"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link footerLinks "><i className="fa fa-heart"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link footerLinks" href="https://www.linkedin.com/in/alesha-reed/"><i className="fab fa-linkedin"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link footerLinks"><i className="fa fa-heart"></i></NavLink>
          </NavItem>
        </Nav>
        );
      }
      return (<Nav className="footerLinks footerLinks text-center"></Nav>);
    };
    return (
    <div>
      { footerBuilder() }
    </div>
    );
  }
}

export default FooterBar;
