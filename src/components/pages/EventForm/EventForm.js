import React from 'react';
import {
  Form, FormGroup, Label, Input, FormFeedback, FormText, Button,
} from 'reactstrap';

import eventData from '../../../helpers/data/eventData';
import authData from '../../../helpers/data/authData';
import './EventForm.scss';

class EventForm extends React.Component {
  state = {
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
  }

  saveScheduleEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      name: this.state.eventName,
      description: this.state.eventDescription,
      date: this.state.eventDate,
      time: this.state.eventTime,
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

  render() {
    const {
      eventName, eventDescription, eventDate, eventTime, eventType,
    } = this.state;
    return (
      <div className="EventForm">
        <Form>
          <FormGroup>
            <Label for="eventName">Event Name</Label>
            <Input className="formLabels"
              value={eventName}
              onChange={this.nameChange}
              placeholder="example: Yonette's 65th Birthday"
            />
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="eventDescription">Event Details</Label>
            <Input className="formLabels"
              value={eventDescription}
              onChange={this.descriptionChange}
              placeholder="example: 65th Birthday at Bobs Steakhouse"
            />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="eventDate">Date Event</Label>
            <Input className="formLabels"
              type="date"
              value={eventDate}
              onChange={this.dateChange}
            />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="eventTime">Time of Event</Label>
            <Input className="formLabels"
              type="time"
              value={eventTime}
              onChange={this.timeChange}
            />
            <FormFeedback tooltip>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="eventType">Type of Event</Label>
            <Input className="formLabels"
              value={eventType}
              onChange={this.typeChange}
            />
            <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
          </FormGroup>
          <Button className="saveBtn" onClick={this.saveScheduleEvent}>Save Event</Button>
        </Form>
      </div>
    );
  }
}

export default EventForm;
