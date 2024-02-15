import { Metadata } from "next";

type Props={
  params:{
    productId:string;
  };
}

export const generateMetadata = ({params}:Props): Metadata =>{
  return { 
    title: `Product ${params.productId}`
  };
};

export default function ProductDetail(
    {params}:Props){
  return (
    <div>
      <h1>Product details pages {params.productId}</h1>
    </div>
  )
}

