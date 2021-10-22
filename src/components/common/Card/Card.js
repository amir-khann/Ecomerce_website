import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/Actions/CartActions';

import './Card.scss'
const Card = ({product}) => {
    const dispatch = useDispatch()
    let value = product.rating.rate
   
    let color ="#f34343";

    const hanelClick = (product) =>{
        dispatch(addToCart(product));
       }
    return (
        <div className="card">
           
           <Link to={`productDetail/${product.id}`}>
                <div className="image_wrapper"> 
                <img src={product.image} className="product_img" alt="product_image"/>
                </div>
            </Link>
            <div className="content_wrapper">
                <div className="title">
                    <Link to={`/productDetail/${product.id}`}><h3>{product.title.slice(0, 30)}</h3></Link>
                    
                    <div><h4>${product.price}</h4>
                       <button className="add"  onClick={() =>hanelClick(product)}>add</button>
                    </div>
                </div>
                {/* refector this in make a review component */}
                <div className="review">
                    <div className="rating">
                        <span>
                            <i
                            style={{ color }}
                            className={
                                value >= 1
                                ? 'fas fa-star'
                                : value >= 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'}>
                            </i>
                        </span>
                        <span>
                            <i
                            style={{ color }}
                            className={
                                value >= 2
                                ? 'fas fa-star'
                                : value >= 1.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'}>
                            </i>
                        </span>
                        <span>
                            <i
                            style={{ color }}
                            className={
                                value >= 3
                                ? 'fas fa-star'
                                : value >= 2.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'}>
                            </i>
                        </span>
                        <span>
                            <i
                            style={{ color }}
                            className={
                                value >= 4
                                ? 'fas fa-star'
                                : value >= 3.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'}>
                            </i>
                        </span>
                        <span>
                            <i
                            style={{ color }}
                            className={
                                value >= 5
                                ? 'fas fa-star'
                                : value >= 4.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'}>
                            </i>
                        </span>
                    </div>
                <p>Review({product.rating.count})</p>
                    </div>
            </div>
        </div>
    )
}

export default Card
