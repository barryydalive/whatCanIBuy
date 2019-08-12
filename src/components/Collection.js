import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'

const Collection = () => {
  const products = useSelector(state => state.products)

  return (
    <div>
      {products.map(product => <Product product={product}></Product>)}
    </div>
  )
}

export default Collection