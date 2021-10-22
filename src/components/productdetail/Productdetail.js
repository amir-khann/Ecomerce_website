import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { addToCart } from '../../redux/Actions/CartActions';
import { getSingleProduct } from '../../redux/Actions/productActions';
import Loader from '../Loader/Loader'

import './ProductDetail.scss'
const Productdetail = () => {
    
    const { id } = useParams();
    const history = useHistory()

    const dispatch = useDispatch()
   
    const products = useSelector(state => state.product)
    console.log("all",products.loading);
    const {product, loading} = products

   console.log("test",product);
    // const product = products.find(product => product.id == id);
    
   const hanelClick = (product) =>{
    dispatch(addToCart(product));
    history.push('/')
   }
   useEffect(() => {
    dispatch(getSingleProduct(id))
   }, [dispatch, id])
  
   
    
    return (
        <>
         {loading ? <Loader /> : ( <div className="card_detail">
                <div className="card">
                    <img src={product.image} className="detail_img" alt="img"></img>
                    <div className="heading">
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                    </div>
                    <p>{product.description}</p>
                    <button className="add_toCart" onClick={() =>hanelClick(product)
                      }>Add to Cart</button>
                </div>
            </div>)
        } 
       </>
    )
}

export default Productdetail
