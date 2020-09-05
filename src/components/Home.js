import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import ItemList from './ItemList/ItemList';
import Cart from './cart/Cart';


class Home extends Component {
    render () {
        return (
           <div className="Home">
               <Row>
                   <Col sm={6} xd={6}>
                        <ItemList />
                   </Col>
                   <Col sm={6} xd={6}>
                       <Cart />
                   </Col>
               </Row>
           </div>
        );
    }
}

export default Home;