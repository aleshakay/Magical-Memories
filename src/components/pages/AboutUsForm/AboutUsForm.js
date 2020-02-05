import React from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Col,
} from 'reactstrap';
import PhotographerCamera from '../../../assets/vaehCamera.jpeg';
import './AboutUsForm.scss';

class AboutUsForm extends React.Component {
  render() {
    return (
      <div className="AboutUsForm">
        <Col sm="6">
          <Card className="aboutuscard">
            <CardImg className="photogrpher" top width="40%" src={PhotographerCamera} alt="Card image cap" />
            <CardBody>
              <CardTitle>Magical Memeories</CardTitle>
              <CardSubtitle>Contact Us</CardSubtitle>
              <CardText>Address: 507 North Royal St.</CardText>
              <CardText>PhoneNumber: 731.313.1111</CardText>
              <CardText>
                <a href="mailto:aleshak83@gmail.com">Email Us</a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className="AboutUsStory mr" sm="6">
          <Card body>
            <CardTitle>Our Story</CardTitle>
              <CardText>
              <p>Magical Moments was created by Minor E. Reed. It was born out of his love for capturing and documenting timeless moments
              Magical Moments specializes in black and white photography. This love has been embedded into the next generation of Reeds.</p>
            </CardText>
          </Card>
        </Col>
      </div>
    );
  }
}

export default AboutUsForm;
