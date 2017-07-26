import React from 'react';

const ParkDropDown = (props) => {
  return (
    <label>
      {props.label}
      <select value={props.rating} onChange={props.handleSelect}>
        <option value="-">-</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </label>
  );
}

export default ParkDropDown;
