import React from 'react'
import Card from '../common/Card/Card'
import Category from '../common/Category/Category'

import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <Category />
            <div className="card_wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Category />
            <div className="card_wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Category />
            <div className="card_wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Category />
            <div className="card_wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
           
        </div>
    )
}

export default Main
