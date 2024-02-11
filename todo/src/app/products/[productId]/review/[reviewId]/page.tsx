import React from 'react'

const Review = ({params}:{params:{productId:string, reviewId:string}}) => {
  return (
    <div>
      <h1>Reviw {params.reviewId} for products {params.productId}</h1>
    </div>
  )
}

export default Review
