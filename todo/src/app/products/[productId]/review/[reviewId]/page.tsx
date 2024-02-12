import { notFound } from 'next/navigation'
import React from 'react'

const Review = ({params}:{params:{productId:string, reviewId:string}}) => {
  if(parseInt(params.reviewId)>1001){
    notFound()
  }
  console.log("parseInt", parseInt)
  return (
    <div>
      <h1>Reviw {params.reviewId} for products {params.productId}</h1>
    </div>
  )
}

export default Review
