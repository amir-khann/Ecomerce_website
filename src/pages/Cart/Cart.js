import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Cart.scss"


// import { addToCart, removeFromCart } from '../actions/cartActions'
const Cart = () => {

  
    const dispatch = useDispatch()
  
    const cart = useSelector((state) => state)
    const { cartList } = cart
  
    console.log("amirrrr",cartList.cartItems);
    // useEffect(() => {
    //   if (productId) {
    //     dispatch(addToCart(productId, qty))
    //   }
    // }, [dispatch, productId, qty])
  
    // const removeFromCartHandler = (id) => {
    //   dispatch(removeFromCart(id))
    // }
  
    return (
       
            <div className="cart_wrapper">
                <div className="cart">
                    <div className="heading">
                        <h3>Shopping Cart</h3>
                        <h4>Remove all</h4>
                    </div>

            {cartList.cartItems?.map((item)=>(
                 <div className="item">
                 <div className="item_img">
                     <img src={item.image} alt="img" />
                 </div>
                 <div className="item_title">
                     <h2>{item.title}</h2>
                 </div>
                 <div className="item_btn">
                     <span>-</span>
                     <h3>{item.qty}</h3>
                     <span>+</span>
                 </div>
                 <div className="item_price">${item.price * item.qty}</div>
             </div>
            ))}
                   


                    <div className="total_wrapper">
                        <div className="total">
                            <div className="content">
                                <div className="sub_total">
                                    <div className="sub_total_item">
                                        <h2>sub-total</h2>
                                        <p>2 items</p>
                                    </div>
                                    <div>
                                       <h1 className="total_price">$777</h1>
                                    </div>
                                </div>
                                
                            </div>
                            <button className="checkout">Checkout</button>
                        </div>
                        
                    </div>

                </div>
            </div>
    )
}

export default Cart
