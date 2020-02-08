import React from 'react';
import firebase from 'firebase/app';
import {
  Card, Button, CardTitle, CardText, CardImg, CardImgOverlay,
} from 'reactstrap';

import 'firebase/auth';
import blackandwhiteflower from '../../../assets/bwflower.jpeg';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <div className="container-fluid">
          <Card inverse>
            <CardImg width="100%" src={blackandwhiteflower} alt="Card image cap" />
            <CardImgOverlay>
            <CardTitle className="magicalMemoriesLoginTitle">Magical Memories</CardTitle>
            <Button className="btn mybutton-big" onClick={this.loginClickEvent}>Login Here</Button>
            <CardText>
              <small className="text-muted">Login with Google</small>
            </CardText>
          </CardImgOverlay>
        </Card>
        </div>
      </div>
    );
  }
}

export default Auth;
