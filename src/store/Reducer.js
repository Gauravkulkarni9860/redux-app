const initialState = {
    cartItem : []
};

const reducer = (state=initialState, action) => {
    switch ( action.type ) {
        case 'ADD_TO_CART' :
            const newItem = {
                id: Math.random(), 
                name: action.value
            }
            return {
                ...state,
                cartItem: state.cartItem.concat( newItem )
            }
        default :
            return state;
    }
    
}

export default reducer;