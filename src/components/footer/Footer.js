import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';
import { connect } from 'react-redux';

class Footer extends Component {
    
    render () {

        let itemPrice = 0;

        for(let i = 0; i < this.props.itm.length; i++){
            let item = this.props.itm[i];
            itemPrice = itemPrice + (item.quantity * item.price);
        }

        let price = itemPrice.toLocaleString('hi', {
            style: 'currency',
            currency: 'USD',
        });

        price = price.replace('$', '₹');

        return (
            <div className="Footer">
                <Button variant="success" disabled={itemPrice===0}>
                    <span>{price}</span> Check out
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.cartItem,
        
    };
}

export default connect(mapStateToProps)(Footer);