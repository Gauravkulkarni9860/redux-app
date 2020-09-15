import * as actionType from '../actions/action';

const initialState = {
    cartItem : [],
    itemList : [],    
};


const reducer = (state=initialState, action) => {

    switch ( action.type ) {
        case actionType.ADD_TO_CART :
            const newItem = {
                id : action.payload.itemId, 
                name : action.payload.title,
                price : action.payload.itemPrice,
                quantity : action.payload.quant,
            }
            return {
                ...state,
                cartItem : state.cartItem.concat( newItem ),
                
            }
            
        case actionType.ADD_QUANTITY :
            const item = state.cartItem.map(item => {
                if (item.id !== action.itemId) return item;
                item.quantity = item.quantity + 1;
                return item;
            });
            return {
                ...state,
                cartItem : item,
            }

        case actionType.SUBSTRACT_QUANTITY :
            const remove = state.cartItem.map(item => {
                if (item.id !== action.itemId) return item;
                item.quantity = item.quantity - 1;
                return item;
            })

            return {
                ...state,
                cartItem : remove.filter(item => item.quantity !== 0)
            }

        case actionType.REMOVE_ITEM :
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.id !== action.itmId),
            }
        
        case actionType.REMOVE_ALL :
            return {
                ...state,
                cartItem: []
            }            
        
        case actionType.FETCH_ITEMS :
            return {
                ...state,
                itemList : action.itemList,
            }    

        default :
            return state;
    }   
}

export default reducer;