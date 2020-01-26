import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import EventForm from '../EventTable/EventTable';
import typeData from '../../../helpers/data/typeData';
import './Event.scss';


class Event extends React.Component {
  static propTypes = {
    setEventType: PropTypes.func,
  }

  state = {
    events: [],
    types: [],
  }

  getEvents = () => {
    eventData.getEventsbyUid(authData.getUid())
      .then((events) => this.setState({ events }))
      .catch((err) => console.error('error from get events', err));
  }

  getType = () => {
    typeData.getAllEventTypes()
      .then((types) => this.setState({ types }))
      .catch((err) => console.error('errors from type:', err));
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <div className="Event">
        <h1>Event</h1>
        {this.state.events.map((event) => <EventForm key={event.id} event={event} />)}
      </div>

    );
  }
}

export default Event;
