import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Header = () => {
  return (
   <>
   <ul>
    <li> <Link to="/">Home</Link> </li>
    <li><Link to="/books">Books</Link></li>
   </ul>
   <Outlet></Outlet>
   </>
  )
}

export default Header