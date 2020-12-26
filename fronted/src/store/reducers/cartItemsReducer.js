import * as actionTypes from "../actions/action-types";

const initialState = {
  cartItems: [],
};

export const cartItemsReducer = (state = initialState, action) => {

    switch (action.type) {
      case actionTypes.ADD_TO_CART:
         
    const item = action.payload;
    const exitItem = state.cartItems.find((x) => x.id === item.id);
    if (exitItem) {
        
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.id === exitItem.id ? item : x
        ),
      };
        } else {
          return {...state,cartItems: [...state.cartItems, item]}
        }
        case actionTypes.REMOVE_FROM_CART: 
        return {
          ...state, cartItems: [...state.cartItems.filter(cartItem => cartItem.id !== action.payload)]
        }
        default:
          return state
    }
};
