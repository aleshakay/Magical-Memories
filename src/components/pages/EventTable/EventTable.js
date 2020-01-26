import React from 'react';
import { Table } from 'reactstrap';
import eventShape from '../../../helpers/propz/eventShape';
import './EventTable.scss';

class EventTable extends React.Component {
  static propTypes = {
    event: eventShape.eventShape,
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
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EventTable;
