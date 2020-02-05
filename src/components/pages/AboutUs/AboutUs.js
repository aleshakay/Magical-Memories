import React from 'react';
import { Container } from 'reactstrap';
import AboutUsForm from '../AboutUsForm/AboutUsForm';
import AboutUsFormBar from '../../shared/AboutUsFormBar/AboutUsFormBar';
import './AboutUs.scss';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <AboutUsFormBar />
        <Container className="aboutcontainer">
          <AboutUsForm />
        </Container>
      </div>
    );
  }
}

export default AboutUs;
