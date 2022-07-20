import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className=''>
        <div className='logo'>Gabriel Milanez</div>
        <ul className='nav-links'>
            <li><Link to="home" className='item-menu'>Página Principal</Link></li>
            <li><Link to="sobre" className='item-menu'>Sobre Nós</Link></li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
