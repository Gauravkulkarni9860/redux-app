import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';
import { connect } from 'react-redux';

class Footer extends Component {
    render () {
        return (
            <div className="Footer">
                <Button variant="success">Rs. {this.props.itm.length * 100} Check out</Button>
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