import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR_ITEMS,
    RESET_CART,
    INCREASE_QTY,
  } from '../Constants/cartConstants'
  
  export const cartReducer = (
    state = { cartItems: []},
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload

        const existItem = state.cartItems.find((x) => x.id === item.id)
     
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
        case INCREASE_QTY:
          const increase = action.payload
  
          const increaseItem = state.cartItems.find((x) => x.id === increase.id)
       
          if (increaseItem) {
             increaseItem.qty = increaseItem.qty-1;
           
            return {
              ...state,
              cartItems: [...state.cartItems]
            }
          } else {
            return {
              ...state,
              cartItems: [...state.cartItems],
            }
          }
      case CART_REMOVE_ITEM:

       const exist = state.cartItems.filter((x) => x.id !== action.payload)
       if (exist.qty > 1){
         exist.qty = exist.qty--
       }else{
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        }
       }
       
  
      case RESET_CART:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }
  