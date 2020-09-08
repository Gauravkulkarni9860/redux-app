import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';
import { connect } from 'react-redux';

class Footer extends Component {
    
    render () {
        let itemPrice = 0;
        itemPrice = this.props.itm.map(item => {
            itemPrice = itemPrice + (item.quantity * item.price);
            return itemPrice;
        })

        var price = itemPrice.toLocaleString('hi', {
            style: 'currency',
            currency: 'USD',
          });
        
        return (
            <div className="Footer">
                <Button variant="success">
                    <span>{price.replace('$', '₹')}</span> Check out
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.cartItem
    };
}

export default connect(mapStateToProps)(Footer);