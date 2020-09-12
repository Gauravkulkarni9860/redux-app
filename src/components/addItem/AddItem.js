import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddItem.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
        let url = "http://localhost:3001/items";
        axios.post(url, {
            name : this.state.name,
            description : this.state.description,
            price : this.state.price
        }).then(result => {
            return(
                alert("Product added successfully!")
            )
        })
        return (<Redirect to="/" />)
        //console.log(this.state);   
    }


    render () {
     
        return (
            <div>
                <Row>
                    <Col sm={2} xd={2}></Col>
                    <Col sm={8} xd={8}>
                        <form className="Form">
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

export default AddItem;