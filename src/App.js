import React from 'react';
import './App.css';
import Home from './components/Home';
import { Row } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Row>
        <Header />
      </Row>
      <Row>
        <Home />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default App;
