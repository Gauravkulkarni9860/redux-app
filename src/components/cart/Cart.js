import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { Button } from 'react-bootstrap';
import * as actionType from '../../store/actions/action';

class Cart extends Component {
    render () {

        const selectedItem = this.props.itm !== null ?
        this.props.itm.map((item, index) => {
            return (
                <ul type="none" key={index}>
                    <li>
                        {item.name.item} 
                    </li> 
                    <li>
                        {item.quantity} X {item.price} = {item.quantity * item.price}
                    </li>
                    <li>
                        <Button variant="success" onClick={() => this.props.onAddQuantity(item.id)}>+</Button>
                    </li>
                    <li>
                        <Button variant="danger" onClick={() => this.props.onSubQuantity(item.id)}>-</Button>
                    </li>
                    <li>
                        <Button variant="danger" onClick={() => this.props.onRemoveItem(item.id)}>Remove</Button>
                    </li>
                    <hr />
                </ul>
            )
        }) : null
        
        return (
            <div className="Cart">
                <h4>
                    You selected Items : &nbsp; 
                    <Button 
                        variant="danger" 
                        onClick={()=>this.props.onRemoveAllItems()} 
                    >
                        Remove All
                    </Button>
                </h4>
                {selectedItem}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.cartItem,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddQuantity : (id) => dispatch({type : actionType.ADD_QUANTITY, itemId : id}),        
        onSubQuantity : (id) => dispatch({type : actionType.SUBSTRACT_QUANTITY, itemId : id}),        
        onRemoveItem : (id) => dispatch({type : actionType.REMOVE_ITEM, itmId : id}),
        onRemoveAllItems : () => dispatch({type : actionType.REMOVE_ALL}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);