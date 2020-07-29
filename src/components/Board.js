import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cell from './Cell';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('one');
  const winningList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [status, setStatus] = useState(null);
  const winnerCheck = (arr) => {
    for (let i = 0; i < winningList.length; i++) {
      const [x, y, z] = winningList[i];
      if (arr[x] && arr[x] === arr[y] && arr[x] === arr[z]) {
        setStatus('winner');
      } else {
        setStatus('looser');
      }
    }
    console.log(status);
  };
  const playerClick = (i) => {
    let temp = board;
    temp[i] = player === 'one' ? 'X' : 'O';
    setBoard(temp);
    setPlayer(() => (player === 'one' ? 'two' : 'one'));
    winnerCheck(board);
  };
  function renderCell(i) {
    return <Cell value={board[i]} onHandleClick={() => playerClick(i)} />;
  }
  return (
    <>
      <Row>
        <Col>{renderCell(0)}</Col>
        <Col>{renderCell(1)}</Col>
        <Col>{renderCell(2)}</Col>
      </Row>
      <Row>
        <Col>{renderCell(3)}</Col>
        <Col>{renderCell(4)}</Col>
        <Col>{renderCell(5)}</Col>
      </Row>
      <Row>
        <Col>{renderCell(6)}</Col>
        <Col>{renderCell(7)}</Col>
        <Col>{renderCell(8)}</Col>
      </Row>
    </>
  );
}

export default Board;
