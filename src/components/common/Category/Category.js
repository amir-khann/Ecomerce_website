import React from 'react'
import { Link } from 'react-router-dom'

import './Category.scss'

const Category = ({Category}) => {
   
    return (
       
        <div className="category">
        <h2>{Category}</h2>
        <Link to={`/category/${Category}`} ><h3>VIEW ALL PRODUCTS</h3></Link>
    </div>
    )
}

export default Category
