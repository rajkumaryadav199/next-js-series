"use client"
import { useRouter } from "next/navigation"
export default function MyOrders(){
    const router =useRouter();
    const onclick=()=>{
        router.push('/')
        // router.forward();
        // router.back()
        // router.replace()

    }
    return<>
    <h1>Order page</h1>
    <button onClick={onclick}>Order Now</button>
    </>
}