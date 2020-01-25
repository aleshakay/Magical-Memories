import React from 'react';
import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';

import EventForm from '../EventForm/EventForm';
import './Event.scss';


class Event extends React.Component {
  state = {
    events : [],
  }

  render() {
    return (
      <div className="Event">Event</div>
    );
  }
}

export default Event;
