
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import Card from '../common/Card/Card';

import './Product.scss'
const Product = () => {

    const { id } = useParams();
   
    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList
    
    
 
   
    return (
          
                 <div className="all_products">
            {products?.map((item) => (
                <Card key={item.id} product={item} className="card"/>
            ))}
           </div>

      
    )
}

export default Product
