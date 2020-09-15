import * as actionType from '../actions/action';
import axios from 'axios';


export const fetchItemRequest = () => {
    return dispatch => {
        axios.get("http://localhost:3001/items")
            .then(response => {
                dispatch(fetchItems(response.data))
            })
            .catch(error => {
                alert("Something went wrong!")
            })
    }   
}

export const fetchItems = (items) => {
    return {
        type : actionType.FETCH_ITEMS,
        itemList : items
    }
}


export const addItemRequest = (item) => {
    return dispatch => {
        axios.post("http://localhost:3001/items", {
            name : item.name,
            description : item.description,
            price : item.price
        }).then(result => {
            return(
                alert("Item added successfully")
            )
        })
    }
}
