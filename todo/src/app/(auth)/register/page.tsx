"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./styles.css";

const Register = () => {
  const navLinks=[
    {"title":'Register', "href":"/register"},{"title":'login', "href":"/login"},{"title":'forgotPassword', "href":"/forgotPassword"}
  ]
  const pathname=usePathname()
  return (
    <div>
      <h1>Register</h1>
      {
        navLinks.map((link)=>{
          const isActive = pathname.startsWith(link.href)
          return <Link href={`${link.href}`} key={link.title} className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}>{link.title}</Link>
        })
      }
    </div>
  )
}

export default Register
