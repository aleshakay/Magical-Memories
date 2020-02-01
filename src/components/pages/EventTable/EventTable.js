import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Proptypes from 'prop-types';
import typeShape from '../../../helpers/propz/typeShape';
import eventShape from '../../../helpers/propz/eventShape';
import './EventTable.scss';

class EventTable extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    type: typeShape.typeShape,
    deleteBoard: Proptypes.func,
  }

  deleteEventEvent = (e) => {
    e.preventDefault();
    const { deleteEvent, event } = this.props;
    deleteEvent(event.id);
  }

  renderType = (key) => {
    const eventIds = this.props.event[key];
    const typeIds = this.props.type[key];
    console.log(eventIds, typeIds);
    const printType = typeIds.typeId === eventIds.typeId;
    if (!eventIds) return null;
    if (!printType) {
      return (
        <td>No reservation</td>
      );
    }
    return (
        <td>{typeIds.name}</td>
    );
  };

  render() {
    const { event } = this.props;

    return (
      <div className="EventTable">
        <Table bordered responsive>
          <tbody>
            <tr>
              <th scope="row">{event.name}</th>
              <td>{event.description}</td>
              <td>{moment(event.date).format('lll')}</td>
              <td>{event.description}</td>
              <td>(this.renderType)</td>
                <td>
                <Button className="deleteBtn" onClick={this.deleteEventEvent}>Delete Event</Button>
                <Link className="btn btn-light editBtn" to={`/event/${event.id}/edit`}>Edit Event</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EventTable;
