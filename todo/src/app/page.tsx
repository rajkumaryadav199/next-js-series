import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Home Page!</h1>
      <br/>
      <Link href="/blogs" >Blog</Link>
      <Link href="/product/1" >product</Link>
    </div>
  )
}

export default page
