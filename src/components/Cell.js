import React from 'react';
import { Button } from 'react-bootstrap';

function Cell({ value, onHandleClick }) {
  const disableCheck = () => {
    if (value) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Button onClick={onHandleClick} variant="light" disabled={disableCheck()}>
      {value}
    </Button>
  );
}

export default Cell;
