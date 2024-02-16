import Link from 'next/link'
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
      <Link href={`/products/${params.productId}/review/${params.reviewId}`}>Review page</Link>
    </div>
  )
}

export default Review
