import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const EventDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const selectedEvent = (e) => {
    e.preventDefault();
    console.log('e', e.target.id);
    props.selectedEvent(e.target.id);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
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
