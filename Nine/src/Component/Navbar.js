import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import About from '../Pages/About'
import User from '../Pages/User'


export default function Navbar() {
  return (
   <>
<nav>
    <ul>
        <li> <Link to ='/'> Home </Link></li>
        <li> <Link to ='/about'> About </Link></li>
        <li> <Link to ='/contact'>Contact </Link></li>
        <li> <Link to ='/login'> Login</Link></li>
        <li> <Link to ='/user'> User  </Link></li>

        
    </ul>

</nav>
   
   
   
   </>


   
  )
}
