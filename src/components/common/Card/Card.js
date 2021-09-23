import React from 'react'

import './Card.scss'
let productimg = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80";
const Card = () => {

    let value = 4.5;
    let color ="red";

    return (
        <div className="card">
            <img src={productimg}></img>
            <div className="content_wrapper">
            <div className="title">
                <h3>title goes here</h3>
                <h4>$40</h4>
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
                <p>Review(43)</p>
                </div>
            </div>
        </div>
    )
}

export default Card
