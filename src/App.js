import React from 'react';
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
        <Row style={{ alignItems: 'center' }}>
          <Col style={{ textAlign: 'center' }}>
            <h1>Player 1 - X</h1>
          </Col>
          <Col>
            <Board />
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <h1>Player 2 - O</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
