import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <p> <span>{this.props.itm.length}</span> element(s) in cart <i className="fa fa-shopping-cart" style={{fontSize:'30px'}}></i></p>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itm : state.cartItem
    };
}
export default connect(mapStateToProps)(Header);