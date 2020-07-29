import React, { useState, useEffect } from 'react';
import Nav from './components/nav';
import { Container, Row, Col } from 'react-bootstrap';
import Board from './components/Board';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Row>
          <Col>You play X</Col>
          <Col>
            Board
            <Board />
          </Col>
          <Col>Player 2 plays O</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
