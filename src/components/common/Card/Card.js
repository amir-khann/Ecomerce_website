import React from 'react'
import { Link } from 'react-router-dom';

import './Card.scss'
const Card = ({product}) => {

    let value = product.rating.rate
   
    let color ="red";
    return (
        <div className="card">
           
           <Link to={`productDetail/${product.id}`}><div className="image_wrapper"> <img src={product.image} className="product_img"></img></div></Link>
            <div className="content_wrapper">
            <div className="title">
                <Link to={`/productDetail/${product.id}`}><h3>{product.title}</h3></Link>
                <h4>${product.price}</h4>
            </div>
            
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
                    : 'far fa-star'
                }
                ></i>
               </span>
            <span>
                <i
                style={{ color }}
                className={
                    value >= 2
                    ? 'fas fa-star'
                    : value >= 1.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
                ></i>
            </span>
            <span>
                <i
                style={{ color }}
                className={
                    value >= 3
                    ? 'fas fa-star'
                    : value >= 2.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
                ></i>
            </span>
            <span>
                <i
                style={{ color }}
                className={
                    value >= 4
                    ? 'fas fa-star'
                    : value >= 3.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
                ></i>
            </span>
            <span>
                <i
                style={{ color }}
                className={
                    value >= 5
                    ? 'fas fa-star'
                    : value >= 4.5
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }
                ></i>
            </span>
                </div>
                <p>Review({product.rating.count})</p>
                </div>
            </div>
        </div>
    )
}

export default Card
