import React from 'react';
import { Button } from 'react-bootstrap';

function Cell({ value, onHandleClick, disable }) {
  return (
    <Button onClick={onHandleClick} disable>
      {value}
    </Button>
  );
}

export default Cell;
