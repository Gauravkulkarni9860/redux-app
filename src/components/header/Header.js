import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render () {
        var itemQuantity = 0;
        itemQuantity = this.props.itm.map(item => {
            itemQuantity = itemQuantity + item.quantity;
            return itemQuantity;
        })

        return (
            <div className="Header">
                <p> <span> {itemQuantity} </span> elements in cart <i className="fa fa-shopping-cart" style={{fontSize:'30px'}}></i></p>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itm : state.cartItem,
    };
}
export default connect(mapStateToProps)(Header);