import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import authData from '../../../helpers/data/authData';
import eventData from '../../../helpers/data/eventData';
import EventTableRow from '../EventTableRow/EventTableRow';
import typeData from '../../../helpers/data/typeData';
import EventBar from '../../shared/EventBar/EventBar';
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
      .then((types) => {
        this.setState({ types });
      })
      .catch((err) => console.error('errors from type:', err));
  }

  componentDidMount() {
    this.getEvents();
    this.getType();
  }

  deleteEvent = (eventId) => {
    eventData.deleteEvent(eventId)
      .then(() => this.getEvents())
      .catch((err) => console.error('error deleting event', err));
  }

  render() {
    return (
      <div className="Event">
        <EventBar />
        <Table bordered responsive>
          <thead>
            <th scope="row">Name</th>
            <td>Description</td>
            <td>Date</td>
            <td>Type</td>
            <td></td>
          </thead>
          <tbody>
            {this.state.events.map((event) => <EventTableRow key={event.id} event={event} deleteEvent={this.deleteEvent} types={this.state.types} />)}
          </tbody>
        </Table>
      </div>

    );
  }
}

export default Event;
