import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Proptypes from 'prop-types';
// import typeShape from '../../../helpers/propz/typeShape';
import eventShape from '../../../helpers/propz/eventShape';
import './EventTableRow.scss';

class EventTableRow extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    // types: typeShape.typeShape,
    deleteBoard: Proptypes.func,
  }

  deleteEventEvent = (e) => {
    e.preventDefault();
    const { deleteEvent, event } = this.props;
    deleteEvent(event.id);
  }

  render() {
    const { event } = this.props;
    const renderType = () => {
      const { typeId } = this.props.event;
      const type = this.props.types.find((x) => x.id === typeId);
      if (!type) {
        return (
          <td>No reservation</td>
        );
      }
      return (
          <td>{type.name}</td>
      );
    };
    return (
      <tr className="EventTable">
        <th scope="row">{event.name}</th>
        <td>{event.description}</td>
        <td>{moment(event.date).format('lll')}</td>
        {renderType()}
          <td>
          <Button className="deleteBtn" onClick={this.deleteEventEvent}>Delete Event</Button>
          <Link className="btn btn-light editBtn" to={`/event/${event.id}/edit`}>Edit Event</Link>
        </td>
      </tr>
    );
  }
}

export default EventTableRow;
