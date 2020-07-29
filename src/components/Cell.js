import React from 'react';

function Cell({ value, onHandleClick }) {
  const disableCheck = () => {
    if (value) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <button
      onClick={onHandleClick}
      disabled={disableCheck()}
      style={{
        height: 84,
        borderRadius: 0,
        borderColor: 'black',
        color: 'black',
        fontSize: 32,
      }}
    >
      {value}
    </button>
  );
}

export default Cell;
