import React, { Component } from 'react';
import './ItemList.css';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';
import * as actionType from '../../store/actions/action'


class ItemList extends Component {

    componentDidMount = () => {
        this.props.onFetchData()
    }
    
    // componentDidUpdate = () => {
    //     console.log(this.props.itm)
    //     const items = this.props.itm.map(item => {
    //         return (
    //             <Card key={item.id} border="info" bg="dark" style={{marginBottom:'10px'}}>
    //                 <Card.Header as="h5">
    //                     {item.name}
    //                 </Card.Header>
    //                 <Card.Body>
    //                     <Card.Text className="text-muted">Description :</Card.Text>
    //                     <Card.Text className="text-muted">
    //                         {item.description}
    //                     </Card.Text>
    //                     <Button 
    //                         variant="primary"
    //                         onClick={() => this.props.onAddToCart(item.name, item.id, item.price)}
    //                     >
    //                         Add To Cart
    //                     </Button>
    //                 </Card.Body>
    //             </Card>
    //         )
    //     })
        
    //     //this.setState({itemsArray : items})
    // }
    
    render () {
        
        let itemsList = this.props.itm.reverse().map(item => {
            return (
                <Card key={item.id} border="info" bg="dark" style={{marginBottom:'10px'}}>
                    <Card.Header as="h5">
                        {item.name}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="text-muted">Description :</Card.Text>
                        <Card.Text className="text-muted">
                            {item.description}
                        </Card.Text>
                        <Button 
                            variant="primary"
                            onClick={() => this.props.onAddToCart(item.name, item.id, item.price)}
                        >
                            Add To Cart
                        </Button>
                    </Card.Body>
                </Card>
            )
        }) 

        return (
            <div className="Items">
                <h4>Select Item</h4>
                {itemsList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm : state.itemList
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (item, id, price) => dispatch({type: actionType.ADD_TO_CART, payload : {title: {item}, itemId: id, itemPrice: price, quant: 1}}),
        onFetchData : () => dispatch(actionCreator.fetchItemRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);