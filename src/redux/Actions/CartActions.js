// import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  INCREASE_QTY,
  RESET_CART,
 
} from '../Constants/cartConstants'

export const addToCart = (product) => async (dispatch) => {

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      qty:1,
    },
  })
}
export const increaseQty = (product) => async (dispatch) => {

  dispatch({
    type: INCREASE_QTY,
    payload: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      qty:1,
    },
  })
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

}
export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: RESET_CART,
  
  })

}