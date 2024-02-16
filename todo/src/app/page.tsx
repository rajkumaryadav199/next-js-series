import Link from 'next/link'

const page = () => {
  return (
    <div>
      Home Page!
      <Link href="/blogs/first" >Blog</Link>
      <Link href="/product/1" >product</Link>
    </div>
  )
}

export default page
