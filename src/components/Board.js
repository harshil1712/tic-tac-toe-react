import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cell from './Cell';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('one');
  //   const [text, setText] = useState('Player One Plays');
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
  const [status, setStatus] = useState('');
  const winnerCheck = useCallback(
    (arr) => {
      for (let i = 0; i < winningList.length; i++) {
        const [x, y, z] = winningList[i];
        if (arr[x] && arr[x] === arr[y] && arr[x] === arr[z]) {
          return arr[x];
        }
      }
      return null;
    },
    [winningList]
  );
  const playerClick = (i) => {
    let temp = board;
    temp[i] = player === 'one' ? 'X' : 'O';
    setBoard(temp);
    setPlayer(() => (player === 'one' ? 'two' : 'one'));
  };
  function renderCell(i) {
    return <Cell value={board[i]} onHandleClick={() => playerClick(i)} />;
  }
  function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayer('one');
    setStatus('');
  }
  useEffect(() => {
    setStatus(() => winnerCheck(board));
    if (status) {
      if (status === 'X') {
        alert('Winner is Player One');
      } else {
        alert('Winner is Player Two');
      }
      resetGame();
    }
  }, [winnerCheck, board, status]);

  return (
    <div style={{ marginTop: 32, textAlign: 'center' }}>
      <h1>{status ? `We have a Winner!` : `Player ${player} Plays`}</h1>
      <Row style={{ marginTop: 32 }}>
        <Col style={{ padding: 0 }}>{renderCell(0)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(1)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(2)}</Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }}>{renderCell(3)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(4)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(5)}</Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }}>{renderCell(6)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(7)}</Col>
        <Col style={{ padding: 0 }}>{renderCell(8)}</Col>
      </Row>
    </div>
  );
}

export default Board;
