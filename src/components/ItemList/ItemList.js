import React, { Component } from 'react';
import './ItemList.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionType from '../../store/action';

class ItemList extends Component {
    render () {
        const items = [
            {"id" : 1, "title" : "Item1"},
            {"id" : 2, "title" : "Item2"},
            {"id" : 3, "title" : "Item3"},
            {"id" : 4, "title" : "Item4"}, 
            {"id" : 5, "title" : "Item5"},
            {"id" : 6, "title" : "Item6"},
            {"id" : 7, "title" : "Item7"},
            {"id" : 8, "title" : "Item8"},
            {"id" : 9, "title" : "Item9"},
            {"id" : 10, "title" : "Item10"},
            {"id" : 11, "title" : "Item11"},
        ];
        
        const itemList = items.map((item, index) => {
            return (
                    <ul type="none" key={item.id}>
                        <li>
                            {item.title}
                        </li>
                        <li className="Shift">
                            <Button 
                                varient="primary" 
                                size="sm"
                                onClick={() => this.props.onAddToCart(item.title, item.id)}
                            >
                                Add to cart
                            </Button>
                        </li>
                    </ul>
            )
        });
        
        return (
            <div className="Items">
                <h4 style={{textAlign:'left', marginLeft:'70px'}}>Select Item</h4>
                {itemList}
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
        onAddToCart: (item, id) => dispatch({type: actionType.ADD_TO_CART, payload : {title: {item}, itemId:{id}, price: 1000, quant: 1}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);