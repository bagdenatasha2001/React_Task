import { NavLink } from 'react-router-dom'
import'./Navbar.css'

export default function Navbar() {
  return (
    <>


   <ul>

  <NavLink to="/Home"> <li>Home </li></NavLink>
  <NavLink to="/News"> <li>News </li></NavLink>
  <NavLink to="/Contact"> <li> Contact </li></NavLink>
  <NavLink to="/About"> <li> About </li></NavLink>
  <NavLink to="/Users"> <li> Users </li></NavLink>
  


  {/* <NavLink  className="{(e)=>{return e.isActive? "red":" "}} to="/" > <li> Home </li> </NavLink>  */}
  </ul>
    

   </>
  )
}
