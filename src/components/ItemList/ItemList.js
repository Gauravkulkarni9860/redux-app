import React, { Component } from 'react';
import axios from 'axios';
import './ItemList.css';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';


class ItemList extends Component {

    state = {
        items : []
    }

    componentDidMount = () => {
        let url = "http://localhost:3001/items";
        axios.get(url).then(result => {
            let items = result.data.reverse().map(item => {
                
                return (

                    <Card key={item.id} border="info" bg="dark" style={{marginBottom:'10px'}}>
                        <Card.Header as="h5">
                            {item.name}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="text-muted">Description :</Card.Text>
                            <Card.Text className="text-muted">
                                {item.description}
                            </Card.Text>
                            <Button 
                                variant="primary"
                                onClick={() => this.props.onAddToCart(item.name, item.id, item.price)}
                            >
                                Add To Cart
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })
            this.setState({items : items})
        })
    }
    

    render () {
        return (
            <div className="Items">
                <h4>Select Item</h4>
                {this.state.items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.cartItem
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (item, id, price) => dispatch({type: actionType.ADD_TO_CART, payload : {title: {item}, itemId: id, itemPrice: price, quant: 1}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);