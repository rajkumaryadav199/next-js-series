import { Metadata } from "next"

type Props={
  params:{
    productId:string
  }
}

const generateMatadata = ({params}:Props):Metadata=>{
  return {title:`Product ${params.productId}`}
}

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
