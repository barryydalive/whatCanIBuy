import React from 'react'

const Product = (props) => {
  const { product } = props
  const data = product.imageURL
  return(
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <img alt={product.name}src={`data:image/jpeg;base64,${data}`}></img>
    </div>
  )
}

export default Product