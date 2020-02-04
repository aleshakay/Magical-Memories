import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import './EventDropdown.scss';

const EventDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const selectedEvent = (e) => {
    e.preventDefault();
    props.selectedEvent(e.target.id);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="dropdownToggle">
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Select Type</DropdownItem>
        {props.types.map((type) => <DropdownItem key={type.id} id={type.id} onClick={selectedEvent}>{type.name}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
};


export default EventDropdown;
