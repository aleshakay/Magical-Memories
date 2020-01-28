import React from 'react';
import './AboutUs.scss';
import AboutUsForm from '../AboutUsForm/AboutUsForm';
import AboutUsFormBar from '../../shared/AboutUsFormBar/AboutUsFormBar';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <AboutUsFormBar />
        <AboutUsForm />
      </div>
    );
  }
}

export default AboutUs;
