import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';


class Cart extends Component {
    render () {

        const selectedItem = this.props.itm.map((item, index) => {
            return (
                <ul type="none" key={index}>
                    <li>{item.name} => 1 X 100 = 100</li> 
                    <hr />
                </ul>
            )
        })
        
        return (
            <div className="Cart">
                <h4>You selected Items :</h4>
                {selectedItem}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.cartItem
    };
}

export default connect(mapStateToProps)(Cart);