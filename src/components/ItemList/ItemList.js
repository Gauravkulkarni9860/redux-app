import React, { Component } from 'react';
import './ItemList.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class ItemList extends Component {
    render () {
        const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10', 'Item11' ];
        
        const itemList = items.map((item, index) => {
            return (
                    <ul type="none" key={index}>
                        <li>
                            {item} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Button 
                                varient="primary" 
                                size="sm"
                                onClick={() => this.props.onAddToCart(item)}
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
        onAddToCart: (item) => dispatch({type: 'ADD_TO_CART', value: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);