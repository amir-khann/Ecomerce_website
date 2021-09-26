import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR_ITEMS,
  } from '../Constants/cartConstants'
  
  export const cartReducer = (
    state = { cartItems: []},
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload

        const existItem = state.cartItems.find((x) => x.id === item.id)
       console.log("amir",state.cartItems);
       console.log("exist item",existItem);
        if (existItem) {
           existItem.qty = existItem.qty+1;
         
          return {
            ...state,
            cartItems: [...state.cartItems]
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        }
  
      case CART_CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }
  