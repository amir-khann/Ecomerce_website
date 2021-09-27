import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/Actions/productActions'
import Card from '../common/Card/Card'
import Category from '../common/Category/Category'
import Loader from '../common/Loader/Loader'

import "./Main.scss"

const Main = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const { loading, products } = productList

  const womenClothesList = products.filter((product)=>product.category === "women's clothing");
  const womenSubArray = womenClothesList.slice(0,4);

  const jewelery = products.filter((product)=>product.category === "jewelery");
  const jewelerySubArray = jewelery.slice(0,4);

  const menClothesList = products.filter((product)=>product.category === "men's clothing");
  const menSubArray = menClothesList.slice(0,4);

  const electronics = products.filter((product)=>product.category === "electronics");
  const electronicsSubArray = electronics.slice(0,4);
     


  
    return (
      <div>
        {loading ===true ? <Loader /> :(  <div className="main">
          <Category  Category={womenSubArray.length? womenSubArray[0].category:""} allList={womenSubArray.length? womenClothesList:""}/>
          <div className="card_wrapper">
              {
                womenSubArray?.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              }
          </div>
          <Category  Category={jewelerySubArray.length? jewelerySubArray[0].category:""} allList={jewelerySubArray.length? jewelery:""}/>
          <div className="card_wrapper">
              {
                jewelerySubArray?.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              }
          </div>

          <Category  Category={menSubArray.length? menSubArray[0].category:""} allList={menSubArray.length? menClothesList:""}/>
          <div className="card_wrapper">
              {
                menSubArray?.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              }
          </div>
          <Category  Category={electronicsSubArray.length? electronicsSubArray[0].category:""} allList={electronicsSubArray.length? electronics:""}/>
          <div className="card_wrapper">
              {
                electronicsSubArray?.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              }
          </div>
        </div>)}
      </div>
    )
}

export default Main
