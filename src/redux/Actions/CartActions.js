import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
 
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

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

 
}