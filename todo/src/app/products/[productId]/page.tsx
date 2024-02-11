import React from 'react'

const ProductDetail = (
    {params}:{
        params:{productId:string}
    }) => {
  return (
    <div>
      <h1>Product details pages {params.productId}</h1>
    </div>
  )
}

export default ProductDetail
