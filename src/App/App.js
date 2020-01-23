import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import NavBar from '../components/shared/NavBar/NavBar';
import Auth from '../components/pages/Auth/Auth';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  };

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
      <NavBar authed={authed} />
       < Auth/>
      </div>
    );
  }
}

export default App;
