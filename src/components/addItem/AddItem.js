import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import './AddItem.css';
import * as actionCreator from '../../store/actions/index';
//import axios from 'axios';


class AddItem extends Component {

    constructor() {
        super()
        this.state ={
            "name" : '',
            "price" : '',
            "description" : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const item = {
            name : this.state.name,
            price : this.state.price,
            description : this.state.description
        }
        if(this.state.name !== '' && this.state.price !== '' && this.state.description !== '') {
            this.props.onAddItem(item);
            this.props.history.replace("/");
        }
        else {
            alert("Please enter data!");
        }
    }

    render () {
     
        return (
            <div>
                <Row>
                    <Col sm={2} xd={2}></Col>
                    <Col sm={8} xd={8}>
                        <form className="Form">
                            <h4>Add New Item</h4>
                            <label>Product Name</label>
                            <input 
                                type="text" 
                                placeholder="Product Name" 
                                name = "name"
                                value={this.state.name}                                   
                                onChange={this.handleChange}  
                            />

                            <label>Product Price</label>
                            <input 
                                type="number" 
                                placeholder="Product Price"
                                name = "price"
                                value={this.state.price}                                   
                                onChange={this.handleChange}  
                            />

                            <label>Product Description</label>
                            <textarea 
                                rows='4' 
                                placeholder="Add product description" 
                                name = "description"
                                value={this.state.description}                                   
                                onChange={this.handleChange}  
                            />

                            <input type="button" value="Submit" onClick={this.handleSubmit} />
                        </form>
                    </Col>
                    <Col sm={2} xd={2}></Col>
                </Row>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem : (item) => dispatch(actionCreator.addItemRequest(item))
    }
}

export default connect(null,mapDispatchToProps)(AddItem);