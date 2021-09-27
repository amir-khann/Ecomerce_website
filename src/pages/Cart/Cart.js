import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQty, removeFromCart, resetCart } from '../../redux/Actions/CartActions'

import "./Cart.scss"


// import { addToCart, removeFromCart } from '../actions/cartActions'
const Cart = () => {

  
    const dispatch = useDispatch()
  
    const cart = useSelector((state) => state)
    const { cartList } = cart
  
   
    // useEffect(() => {
    //   if (productId) {
    //     dispatch(addToCart(productId, qty))
    //   }
    // }, [dispatch, productId, qty])
  
    // const removeFromCartHandler = (id) => {
    //   dispatch(removeFromCart(id))
    // }
     
   
        const addCart = (item) =>{
            dispatch(addToCart(item));
           
           }
        
        const removeCart = (item) =>{
            dispatch(removeFromCart(item));
        }
    
        const increase = (item) =>{
            console.log("log increase  1 from",item.title);
            dispatch(increaseQty(item))
        }
          
    return (
       
            <div className="cart_wrapper">
             {cartList.cartItems.length === 0?<h1>no Items in Cart</h1> :( <div className="cart">
                    <div className="heading">
                        <h3>Shopping Cart</h3>
                        <h4 onClick={()=>dispatch(resetCart())}>Remove all</h4>
                    </div>

                        {cartList.cartItems?.map((item)=>(
                            <div className="item" key={item.id}>
                            <div className="item_img">
                                <img src={item.image} alt="img" />
                            </div>
                            <div className="item_title">
                                <h2>{item.title}</h2>
                            </div>
                            <div className="item_btn">
                                <span >
                                    <button onClick={() => increase(item)} disabled={item.qty===1} className="span_btn">-</button>
                                </span>
                                <h3>{item.qty}</h3>
                                <span >
                                    <button onClick={() =>addCart(item)} className="span_btn">+</button>
                                </span>
                            </div>
                            <div className="item_price">
                              <h1>${(item.price * item.qty).toFixed(2)}</h1>
                              <p onClick={()=>removeCart(item.id)}>Remove</p>
                            </div>
                        </div>
                        ))}
                   


                    <div className="total_wrapper">
                        <div className="total">
                            <div className="content">
                                <div className="sub_total">
                                    <div className="sub_total_item">
                                        <h2>sub-total</h2>
                                        <p> Subtotal ({cartList.cartItems.reduce((acc, item) => acc + item.qty, 0)})items</p>
                                    </div>
                                    <div>
                                       <h1 className="total_price">${cartList.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h1>
                                    </div>
                                </div>
                                
                            </div>
                            <button className="checkout">Checkout</button>
                        </div>
                        
                    </div>

                </div>)}
            </div>
    )
}

export default Cart
