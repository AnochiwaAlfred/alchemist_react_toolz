import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/forbes.png"

const Header = () => {
  return (
    <nav className='nav'>
      <div className="container nav__container">
      <Link to={"/"} className="nav-logo">
        <img src={Logo} alt="" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/accordion">Accordion</Link></li>
        <li><Link to="/shopping-list">Shopping List</Link></li>
        <li><Link to="/github-user-search">Github User Search</Link></li>
        <li><Link to="/accordion">Accordion</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Header
