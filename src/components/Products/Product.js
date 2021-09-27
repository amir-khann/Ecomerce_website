
import React from 'react'
import { useSelector } from 'react-redux';

import Card from '../common/Card/Card';

import './Product.scss'
const Product = () => {

   
    const productList = useSelector(state => state.productList)
    const { products, } = productList
    
    
 
   
    return (
         
        <div className="all_products_wrapper">
            <h2>all Products</h2>
            <div className="all_products">
                    {products?.map((item) => (
                        <Card key={item.id} product={item} className="card"/>
                    ))}
                 </div>
        </div>
          
                 

      
    )
}

export default Product
