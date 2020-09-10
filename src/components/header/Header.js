import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render () {
        let itemQuantity = 0;
        let i = 0;
        for(i = 0; i < this.props.itm.length; i++){
            let item = this.props.itm[i];
            itemQuantity = itemQuantity + item.quantity;
        }
        return (
            <div className="Header">
                {
                    itemQuantity === 0 ? <p><i className="fa fa-shopping-cart" style={{fontSize:'30px', color:'red'}}></i></p> :
                    <p><span> {itemQuantity} </span> elements in cart <i className="fa fa-shopping-cart" style={{fontSize:'30px', color:'green'}}></i></p> 
                }
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