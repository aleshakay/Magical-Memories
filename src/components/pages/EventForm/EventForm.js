import React from 'react';
import {
  Form, FormGroup, Label, Input, FormFeedback, Button,
} from 'reactstrap';
// import PropTypes from 'prop-types';
import EventFormBar from '../../shared/EventFormBar/EventFormBar';
import eventData from '../../../helpers/data/eventData';
import authData from '../../../helpers/data/authData';
import './EventForm.scss';
import typeShape from '../../../helpers/propz/typeShape';
import typeData from '../../../helpers/data/typeData';
import EventDropdown from '../../shared/EventDropdown/EventDropdown';

class EventForm extends React.Component {
  state = {
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
    types: [],
  }

  static propTypes = {
    type: typeShape.typeShape,
  }

  getType = () => {
    typeData.getAllEventTypes()
      .then((types) => this.setState({ types }))
      .catch((err) => console.error('errors from type:', err));
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    this.getType();
    if (eventId) {
      eventData.getSingleEvent(eventId)
        .then((response) => {
          this.setState({
            eventName: response.data.name, eventDescription: response.data.description, eventDate: response.data.date, eventType: response.data.typeId,
          });
        })
        .catch((err) => console.error('error in get single event', err));
    }
  }

  editEventEvent = (e) => {
    e.preventDefault();
    const { eventId } = this.props.match.params;
    const editEvent = {
      name: this.state.eventName,
      description: this.state.eventDescription,
      date: this.state.eventDate,
      uid: authData.getUid(),
      typeId: this.state.eventType,
    };
    eventData.updateEvent(eventId, editEvent)
      .then(() => this.props.history.push('/event'))
      .catch((err) => console.error('error from edit event', err));
  }


  saveScheduleEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      name: this.state.eventName,
      description: this.state.eventDescription,
      date: new Date(`${this.state.eventDate} ${this.state.eventTime}`),
      uid: authData.getUid(),
      typeId: this.state.eventType,
    };
    eventData.saveEvent(newEvent)
      .then(() => this.props.history.push('/event'))
      .catch((error) => console.error(error));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ eventName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ eventDescription: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ eventDate: e.target.value });
  }

  timeChange = (e) => {
    e.preventDefault();
    this.setState({ eventTime: e.target.value });
  }

  typeChange = (e) => {
    e.preventDefault();
    this.setState({ eventType: e.target.value });
  }

  selectedEvent = (typeId) => {
    this.setState({ eventType: typeId });
  }

  render() {
    const {
      eventName, eventDescription, eventDate,
    } = this.state;
    const { eventId } = this.props.match.params;
    return (
      <div className="EventForm">
        <EventFormBar />
        <Form>
          <FormGroup className="eventFormGroup">
            <Label for="eventName">Event Name</Label>
            <Input className="formLabels"
              value={eventName}
              onChange={this.nameChange}
              placeholder="example: Yonette's 65th Birthday"
            />
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup className="eventFormGroup">
            <Label for="eventDescription">Event Details</Label>
            <Input className="formLabels"
              value={eventDescription}
              onChange={this.descriptionChange}
              placeholder="example: 65th Birthday at Bobs Steakhouse"
            />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>
          <FormGroup className="eventFormGroup">
            <Label for="eventDate">Date Event</Label>
            <Input className="formLabels"
              type="date"
              value={eventDate}
              onChange={this.dateChange}
            />
          <FormGroup>
            <Label for="eventTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="eventTime"
              onChange={this.timeChange}
              placeholder="time placeholder"
            />
          </FormGroup>
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          </FormGroup>
          <FormGroup className="eventFormGroup">
            <Label for="eventType">Type of Event</Label>
            <EventDropdown types={this.state.types} selectedEvent={this.selectedEvent}/>

            <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
          </FormGroup>
          { eventId
            ? <Button className="UpdateBtn" onClick={this.editEventEvent}>Update Event</Button>
            : <Button className="saveBtn" onClick={this.saveScheduleEvent}>Save Event</Button>
          }
        </Form>
      </div>
    );
  }
}

export default EventForm;
