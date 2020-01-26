import React from 'react';
import { Table, Button } from 'reactstrap';
import Proptypes from 'prop-types';

import eventShape from '../../../helpers/propz/eventShape';
import './EventTable.scss';

class EventTable extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
    deleteBoard: Proptypes.func,
  }

  deleteEventEvent = (e) => {
    e.preventDefault();
    const { deleteEvent, event } = this.props;
    deleteEvent(event.id);
  }

  render() {
    const { event } = this.props;
    return (
      <div className="EventTable">
        <Table bordered responsive>
          <tbody>
            <tr>
              <th scope="row">{event.name}</th>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.typeId}</td>
              <td>
                <Button className="deleteBtn" onClick={this.deleteEventEvent}>Delete Event</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EventTable;
