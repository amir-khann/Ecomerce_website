import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

import './ProductDetail.scss'
const Productdetail = () => {

    const { id } = useParams();
   
    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList
    
    const product = products.find(product => product.id == id)
 
   
    return (
            <div className="card_detail">
                <div className="card">
                    <img src={product.image} className="detail_img"></img>
                    <div className="heading">
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                    </div>
                    <p>{product.description}</p>
                    <button className="add_toCart">Add to Cart</button>
                </div>
            
            </div>
      
    )
}

export default Productdetail
