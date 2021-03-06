import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
}
  from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';


import NavBar from '../components/shared/NavBar/NavBar';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import Event from '../components/pages/Event/Event';
import EventForm from '../components/pages/EventForm/EventForm';
import SinglePicture from '../components/pages/SinglePicture/SinglePicture';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import FooterBar from '../components/shared/FooterBar/FooterBar';
import './App.scss';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    userObj: '',
  };

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        this.setState({ authed: true, userObj });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, userObj } = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar authed={authed} userObj={userObj} />
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed} userObj={userObj.displayName}/>
            <PrivateRoute path="/event" exact component={Event} authed={authed}/>
            <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
            <PrivateRoute path="/event/new" exact component={EventForm} authed={authed} />
            <PrivateRoute path="/event/:eventId/edit" exact component={EventForm} authed={authed} />
            <PrivateRoute path="/event/eventpictures" exact component={SinglePicture} authed={authed} />
            <PrivateRoute path="/aboutus" exact component={AboutUs} authed={authed} />
          </Switch>
          <FooterBar authed={authed}/>
        </Router>
      </div>
    );
  }
}

export default App;
