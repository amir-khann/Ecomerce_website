import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { listProducts } from '../../redux/Actions/productActions';
import Card from '../common/Card/Card';

import './Category.scss'

const Category = () => {
    const dispatch = useDispatch()
    const category = useParams();
    const productList = useSelector((state) => state.productList)
    console.log(productList);
  
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const { loading, error, products, page, pages } = productList
  const product = products.filter((product)=>product.category === category.category);

    return (
        <div className="all_products">
            {product?.map((item) => (
                <Card key={item.id} product={item} className="card"/>
            ))}
        </div>
    )
}

export default Category
